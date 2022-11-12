import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import { globalStyles } from "../styles/global";
import ProfileCard from "../components/card";
import React, { useState, useContext } from "react";
import AnswerCard from "../components/answerCard";
import GoBackBtn from "../components/goBackBtn";
import { AuthContext } from "../context/auth";

export default function ScoreScreen({ navigation }) {
  // const { AuthState, AuthDispatch } = useContext(AuthContext);

  const [score, setScore] = useState([
    {
      name: "sofa",
      image: require("../assets/img/sofa.jpg"),
      id: 1,
      type: "answer",
    },
    {
      name: "table",
      image: require("../assets/img/table.jpg"),
      id: 2,
      type: "answer",
    },
    {
      name: "chair",
      image: require("../assets/img/chair.jpg"),
      id: 3,
      type: "answer",
    },
    {
      name: "cup",
      image: require("../assets/img/cup.jpg"),
      id: 4,
      type: "answer",
    },
  ]);

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Score</Text>
          <Text style={globalStyles.headerTitle}>25</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            keyExtractor={(item) => item.id}
            horizontal={true}
            data={score}
            renderItem={({ item }) => <AnswerCard item={item} />}
          />
        </View>
        <TouchableOpacity
          style={globalStyles.buttonSpecial}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});
