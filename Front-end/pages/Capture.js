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
        <View style={styles.rightColumn}>
          <View style={globalStyles.proileIcon}>
            <ProfileCard />
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
    gap: "2em",
    padding: "4em",
  },
  rightColumn: {
    height: "100%",
    justifyContent: "space-between",
  },
  camera: {
    border: "solid 5px blue",
    width: "40em",
    height: "100%",
  },
});
