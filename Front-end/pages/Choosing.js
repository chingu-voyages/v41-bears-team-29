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

export default function Choosing({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
          <GoBackBtn />
        </TouchableOpacity>{" "}
        <View style={styles.photo}>
          <Text>Choosing</Text>
        </View>
        <View style={styles.answerContainer}>
          <Button title="Wrong answer" />
          <Button title="Wrong answer" />
          <Button title="Wrong right" />
        </View>
        <Button
          title="go to Score"
          onPress={() => navigation.navigate("Score")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
  },
  photo: {
    width: "30em",
    height: "30em",
    border: "solid 5px blue",
  },
  answerContainer: {
    flexDirection: "row",
    gap: "2em",
  },
});
