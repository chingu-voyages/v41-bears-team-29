import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackbtn";
import ProfileCard from "../components/profileCard";
import { globalStyles } from "../styles/global";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Choosing({ navigation }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <View style={styles.photo}>
            <Text>Choosing</Text>
          </View>
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
  },
  photo: {
    width: "40%",
    height: "30%",
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'blue',
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  answerContainer: {
    flexDirection: "row",
  },
});
