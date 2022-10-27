import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import ProfileAdmin from "./ProfileAdminScreen";
import { globalStyles } from "../styles/global";
import bgImage from "../assets/img/bg40.jpg";

export default function Register({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <Text>Welcome to</Text>
        <Text>What's that?!</Text>
        <Text>Please register to start playing with this incredible game</Text>
        <Button
          title="Go to your profile"
          onPress={() => navigation.navigate("ProfileAdmin")}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
