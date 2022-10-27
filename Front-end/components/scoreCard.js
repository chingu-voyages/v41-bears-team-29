import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ScoreCard({ item }) {
  const { answer, photo } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} source={photo}></Image>
        <Text style={styles.answer}>{answer}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    margin: 10,
  },
  image: {
    // width: "100%",
    height: 100,
  },
  answer: {
    fontSize: 8,
  },
});
