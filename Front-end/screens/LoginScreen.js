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
import MenuBtn from "../components/menuBtn";
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
          <TouchableOpacity>
            <MenuBtn />
          </TouchableOpacity>
          <Text style={globalStyles.appName}>What's that?!</Text>
        </View>

        <Text style={globalStyles.headerTitle}>Who is ready to play?</Text>
        {/* <Text style={globalStyles.headerTitle}>{AuthState.user.username}</Text> */}
        <View style={globalStyles.userList}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={AuthState.kids}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={() => onPressProfileHandler(item)}
              >
                <Card item={item} />
              </TouchableOpacity>
            )}
          />
        </View>

        <Button
          title="go to ProfileAdmin"
          onPress={() => navigation.navigate("ProfileAdmin")}
        />
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
    flex: 2,
  },

  profileContainer: {
    // margin: 10,
  },
});
