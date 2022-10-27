import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function GoBackBtn() {
  return <Ionicons name="caret-back" style={styles.goBackBtn} />;
}

const styles = StyleSheet.create({
  goBackBtn: {
    width: 70,
    height: 70,
    fontSize: 60,
    textAlignVertical: "center",
    backgroundColor: "#FEF1E6",
    borderRadius: 100,
    color: "#F3C583",
    borderColor: "#E99497",
    borderWidth: 5,
    marginHorizontal: 10,
  },
});
