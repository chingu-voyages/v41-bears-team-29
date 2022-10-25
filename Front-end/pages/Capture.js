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

export default function Capture({ navigation }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <GoBackBtn />
        </TouchableOpacity>
        <View style={styles.camera}>
          <Text>Capture</Text>
        </View>
        <View style={styles.rightColumn}>
          <View style={globalStyles.profileIcon}>
            <ProfileCard user={currentUser} />
          </View>
          <Button
            title="go to Choosing"
            onPress={() => navigation.navigate("Choosing")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  rightColumn: {
    height: "100%",
    justifyContent: "space-between",
  },
  camera: {
    borderWidth: 5,
    borderColor:'blue',
    borderStyle: 'solid',
    width: "40%",
    height: "100%",
  },
});
