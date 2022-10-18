import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function GoBackBtn() {
  return <AntDesign name="back" style={globalStyles.goBackBtn} />;
}
