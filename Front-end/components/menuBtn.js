import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

export default function MenuBtn() {
  return <Entypo name="menu" styles={styles.menuBtn} />;
}
const styles = StyleSheet.create({
  menuBtn: {
    fontSize: 20,
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});
