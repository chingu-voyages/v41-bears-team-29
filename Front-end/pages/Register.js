import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import ProfileAdmin from "./ProfileAdmin";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Wellcome to</Text>
      <Text>What's that?!</Text>
      <Text>Please register to start playing with this incredible game</Text>
      <Button
        title="Go to your profile"
        onPress={() => navigation.navigate("ProfileAdmin")}
      />
      <StatusBar style="auto" />
    </View>
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
