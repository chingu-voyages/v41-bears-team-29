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
import EditProfileCard from "../components/editProfileCard";
import bgImage from "../assets/img/bg40.jpg";
import { globalStyles } from "../styles/global";
import React, { useState } from "react";
import Addprofile from "../components/addProfile";
import GoBackBtn from "../components/goBackbtn";
import * as ImagePicker from "expo-image-picker";

export default function ProfileAdmin({ navigation }) {
  const [users, setUsers] = useState([
    { name: "Tom", photo: require("../assets/img/profilePhoto.jpg"), id: "1" },
    {
      name: "Alise",
      photo: require("../assets/img/profilePhoto2.jpg"),
      id: "2",
    },
    {
      name: "Javi",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "3",
    },
  ]);
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
    changeHandler("");
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
        <View horizontal={true} style={styles.usersList}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={users}
            renderItem={({ item }) => (
              <EditProfileCard
                user={item}
                deleteUserHandler={deleteUserHandler}
              />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
  },
  usersList: {
    width: "100%",
    overflow: "hidden",
  },
  profilesContainer: {
    flexDirection: "row",
    gap: "2em",
  },

  newPlayer: {
    fontSize: "3rem",
  },
});
