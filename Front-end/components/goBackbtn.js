import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

export default function GoBackBtn() {
  return <Ionicons name="caret-back" style={styles.goBackBtn} />;
}

const styles = StyleSheet.create({
  goBackBtn: {
    fontSize: 60,
    paddingTop: 5,
    backgroundColor: "#FEF1E6",
    borderRadius: 30,
    color: "#F3C583",
    borderColor: "#E99497",
    borderWidth: 5,
    marginHorizontal: 10,
  },
});
