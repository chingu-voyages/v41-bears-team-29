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

export default function Capture({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <GoBackBtn />
        </TouchableOpacity>
        <View style={styles.camera}>
          <Text>Capture</Text>
        </View>
        <Button
          title="go to Choosing"
          onPress={() => navigation.navigate("Choosing")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
  },
  camera: {
    border: "solid 5px blue",
    width: "30em",
    height: "30em",
  },
  backBtn: {
    backgroundColor: "orange",
  },
});
