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

export default function ProfileAdmin({ navigation }) {
  const [users, setUsers] = useState([
    { name: "Tom", id: "1" },
    { name: "Alise", id: "2" },
    { name: "Javi", id: "3" },
    // { name: 'Alise', id: '4' },
    // { name: 'Alise', id: '5' },
  ]);

  const pressHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };
  const submitHandle = (newUser) => {
    if (newUser.length >= 3) {
      setUsers((prevUsers) => {
        return [{ name: newUser, id: Math.random().toString() }, ...prevUsers];
      });
    } else {
      Alert.alert("OOPS!", "New name most be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Profiles</Text>
        </View>
        <Text style={styles.newPlayer}>New Player</Text>
        <Addprofile submitHandle={submitHandle} />
        <View horizontal={true} style={styles.usersList}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={users}
            renderItem={({ item }) => (
              <EditProfileCard user={item} pressHandler={pressHandler} />
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
    padding: "4em",
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
