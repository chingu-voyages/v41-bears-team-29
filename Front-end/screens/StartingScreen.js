import React from "react";
import { globalStyles } from "../styles/global";
import bgImage from "../assets/img/bg40.jpg";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const StartingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.appName}>What's that?!</Text>
          <Text style={globalStyles.text}>Explore things around you</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={globalStyles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={globalStyles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    gap: 15,
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  wellcomePic: {
    height: 200,
  },
});

export default StartingScreen;
