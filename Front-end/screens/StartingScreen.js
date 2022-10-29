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
} from "react-native";

const StartingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View>
        <Image
          style={styles.wellcomePic}
          source={require("../assets/img/wellcome.jpg")}
        />
        <View style={styles.header}>
          <Text style={globalStyles.appName}>What's that?!</Text>
          <Text>Explore things around you</Text>
        </View>
        <View style={styles.body}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
            title="Register"
            show={"register"}
          />
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
            title="Login"
            display={"login"}
          />
          <View>
            <Button style={styles.button} title="Continue with Google" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    gap: 15,
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  body: {
    gap: 20,
    alignItems: "center",
  },
  wellcomePic: {
    height: "30%",
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 20,
  },
});

export default StartingScreen;
