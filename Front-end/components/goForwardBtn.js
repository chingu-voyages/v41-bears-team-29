import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function GoBackBtn() {
  return <Ionicons name="caret-forward" style={styles.goForwardBtn} />;
}

const styles = StyleSheet.create({
  goForwardBtn: {
    width: 70,
    height: 70,
    fontSize: 50,
    padding: 10,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#FEF1E6",
    borderRadius: 100,
    color: "#96CEB4",
    borderColor: "#E99497",
    borderWidth: 5,
  },
});
