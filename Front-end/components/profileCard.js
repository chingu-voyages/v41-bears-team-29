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
      <Image
        style={styles.profilePhoto}
        source={require("../assets/img/profilePhoto.jpg")}
      ></Image>
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
    border: "solid 5px #BEAEE2",
    borderRadius: 10,
  },
  profileName: {
    textAlign: "center",
    paddingTop: ".5em",
    // fontSize: '2rem',
  },
});
