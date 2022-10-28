import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function NewUserBtn() {
  return <Feather name="user-plus" style={styles.camera} />;
}
const styles = StyleSheet.create({
  camera: {
    fontSize: 60,
    textAlignVertical: "center",
    width: 70,
    height: 70,
    borderWidth: 5,
    borderRadius: 100,
    textAlign: "center",
    borderColor: "#F3C583",
    backgroundColor: "#FEF1E6",
  },
});
