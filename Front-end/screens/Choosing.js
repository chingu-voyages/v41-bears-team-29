import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackbtn";
import ProfileCard from "../components/card";
import { globalStyles } from "../styles/global";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Choosing({ navigation }) {
  const { currentUser, photo } = useContext(AuthContext);
  console.log(photo);
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <SafeAreaView style={styles.photoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 200, height: 200 }}
            />
            <Text>{JSON.stringify(photo)}</Text>
          </SafeAreaView>
          <View style={globalStyles.profileIcon}>
            <ProfileCard user={currentUser} />
          </View>
        </View>
        <View style={styles.answerContainer}>
          <Button title="Wrong answer" />
          <Button title="Wrong answer" />
          <Button title="Wrong right" />
          <Button
            title="go to Score"
            onPress={() => navigation.navigate("Score")}
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
    padding: 20,
    gap: 10,
  },
  photoContainer: {
    width: 600,
    height: 400,
    borderWidth: 2,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  answerContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
