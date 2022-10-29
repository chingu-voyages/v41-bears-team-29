import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import Card from "../components/card";
import bgImage from "../assets/img/bg40.jpg";
import { globalStyles } from "../styles/global";
import React, { useState, useContext } from "react";
import Addprofile from "../components/addProfile";
import GoBackBtn from "../components/goBackbtn";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/auth";

export default function ProfileAdmin({ navigation }) {
  const { users, setUsers } = useContext(AuthContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [newUser, setNewUser] = useState("");

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const deleteUserHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };
  const changeHandler = (val) => {
    setNewUser(val);
  };
  const submitHandle = (newUser) => {
    if (newUser.length >= 3) {
      setUsers((prevUsers) => {
        return [
          {
            name: newUser,
            photo: { uri: selectedImage.localUri },
            id: Math.random().toString(),
          },
          ...prevUsers,
        ];
      });
    } else {
      Alert.alert("OOPS!", "New name most be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Profiles</Text>
        </View>
        <Text style={styles.newPlayer}>New Player</Text>
        <Addprofile
          newUser={newUser}
          changeHandler={changeHandler}
          submitHandle={submitHandle}
          openImagePickerAsync={openImagePickerAsync}
        />
        <View style={globalStyles.userList}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={users}
            renderItem={({ item }) => (
              <Card item={item} deleteUserHandler={deleteUserHandler} />
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 2,
  },
  usersList: {
    width: "100%",
    borderWidth: 3,
    borderColor: "red",
    overflow: "hidden",
    alignItems: "center",
  },
  profilesContainer: {
    flexDirection: "row",
  },

  newPlayer: {
    fontSize: 24,
  },
});
