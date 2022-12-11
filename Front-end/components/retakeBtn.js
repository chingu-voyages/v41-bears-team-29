import { Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function CameraBtn() {
  return <Entypo name="ccw" style={styles.camera} />;
}
const styles = StyleSheet.create({
  camera: {
    fontSize: 90,
    textAlignVertical: "center",
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 100,
    margin: 10,
    textAlign: "center",
    borderColor: "#BEAEE2",
    backgroundColor: "#FEF1E6",
  },
});
