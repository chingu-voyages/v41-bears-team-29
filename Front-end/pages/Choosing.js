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

export default function Choosing({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <View style={styles.photo}>
            <Text>Choosing</Text>
          </View>
          <View style={globalStyles.proileIcon}>
            <ProfileCard />
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

    gap: "1em",
    padding: "4em",
  },
  photo: {
    width: "40em",
    height: "30em",
    border: "solid 5px blue",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: "2em",
  },
  answerContainer: {
    flexDirection: "row",
    gap: "2em",
  },
});
