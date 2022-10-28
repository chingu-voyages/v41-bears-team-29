import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function MenuBtn() {
  return <Ionicons name="menu" style={styles.menuBtn} />;
}
const styles = StyleSheet.create({
  menuBtn: {
    fontSize: 60,
    textAlignVertical: "center",
    width: 90,
    height: 90,
    marginHorizontal: 10,
    borderWidth: 5,
    borderRadius: 100,
    textAlign: "center",
    borderColor: "#BEAEE2",
    backgroundColor: "#FEF1E6",
  },
});
