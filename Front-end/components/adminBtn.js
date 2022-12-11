import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function CameraBtn() {
  return <Ionicons name="person-add-outline" style={styles.camera} />;
}
const styles = StyleSheet.create({
  camera: {
    fontSize: 60,
    textAlignVertical: "center",
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 100,
    textAlign: "center",
    borderColor: "#BEAEE2",
    backgroundColor: "#FEF1E6",
  },
});
