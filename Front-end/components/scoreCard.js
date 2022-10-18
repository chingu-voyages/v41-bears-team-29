import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ScoreCard({ item }) {
  const { answer, url } = item;

  return (
    <View style={styles.container} onPress={() => goToCapute}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../assets/img/sofa.jpg")}
        ></Image>
        <Text style={styles.answer}>{answer}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    border: "solid 1px red",
    height: 150,
    width: 150,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 100,
    border: "solid 1px red",
  },
  answer: {
    fontSize: "2em",
  },
});
