import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function AnswerCard({ item }) {
  const { name, image } = item;
  console.log(item);
  return (
    <View style={styles.containerAnswer}>
      {/* <Image style={styles.profilePhoto} source={image} /> */}
      <Image style={styles.profilePhoto} source={image} />
      <Text style={styles.profileName}>{name}</Text>
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
    marginHorizontal: 10,
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
    marginHorizontal: 10,
  },
});
