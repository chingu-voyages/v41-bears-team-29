import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProfileCard({ user }) {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePhoto} source={user?.photo}></Image>
      <Text style={styles.profileName}>{user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  profileName: {
    textAlign: "center",
    paddingTop: 8,
    fontSize: 32
  },
});
