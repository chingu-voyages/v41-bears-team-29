import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Card({ user, answer }) {
  return (
    <View style={user ? styles.containerUser : styles.containerAnswer}>
      <Image style={styles.profilePhoto} source={user?.photo} />
      <Text style={styles.profileName}>{user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerUser: {
    height: "100%",
    padding: 10,
    backgroundColor: "#FEF1E6",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#96CEB4",
  },
  profilePhoto: {
    width: 160,
    height: 180,
    borderRadius: 10,
  },
  profileName: {
    textAlign: "center",
    paddingTop: 8,
    fontSize: 32,
    fontFamily: "FuzzyBubbles-Bold",
  },
  containerAnswer: {
    height: "100%",
    padding: 10,
    backgroundColor: "#FEF1E6",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#E99497",
  },
});
