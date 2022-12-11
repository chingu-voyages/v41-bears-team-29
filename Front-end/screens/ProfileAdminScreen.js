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
import GoBackBtn from "../components/goBackBtn";
import { AuthContext } from "../context/AuthContext";

export default function ProfileAdminScreen({ navigation }) {
  const { AuthState, AuthDispatch, newPlayers, selectedImage } =
    useContext(AuthContext);

  const deleteUserHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Players</Text>
        </View>
        <Addprofile />
        <View style={globalStyles.userList}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={AuthState.kids}
            renderItem={({ item }) => (
              <Card item={item} deleteUserHandler={deleteUserHandler} />
            )}
          />
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={newPlayers}
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
});
