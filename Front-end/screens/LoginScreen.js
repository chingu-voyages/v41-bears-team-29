import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/card";
import bgImage from "../assets/img/bg40.jpg";
import { globalStyles } from "../styles/global";
import React, { useState, useContext, useEffect } from "react";
import AdminBtn from "../components/adminBtn";
import { AuthContext } from "../context/AuthContext";
import Clarifai from "../Api/Clarifai";

const clarifai = new Clarifai(
  "w55zqbb8z4wu",
  "91fbf60c37ec4e22a53ad82cfda631ba",
  "what-is-that"
);

export default function LoginScreen({ navigation }) {
  const { AuthState, AuthDispatch } = useContext(AuthContext);

  const onPressProfileHandler = (profile) => {
    navigation.navigate("Capture");
    AuthDispatch({ type: "update_active_kid", payload: profile });
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.appNameHeader}>What's that?!</Text>
        </View>
        <View style={styles.body}>
          <Text style={globalStyles.headerTitle}>Who is ready to play?</Text>

          <View style={globalStyles.userList}>
            <FlatList
              keyExtractor={(user) => user.id}
              horizontal={true}
              data={AuthState.kids}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressProfileHandler(item)}>
                  <Card item={item} />
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileAdmin")}
            >
              <AdminBtn />
            </TouchableOpacity>
          </View>
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
  header: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  body: {
    flex: 2,
  },
});
