import { StatusBar } from "expo-status-bar";
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
import ProfileCard from "../components/profileCard";
import React, { useState } from "react";
import ScoreCard from "../components/scoreCard";
import GoBackBtn from "../components/goBackbtn";

export default function Score({ navigation }) {
  const [score, setScore] = useState([
    { photo: 1, answer: "sofa", url: "../assets/img/sofa.jpg", id: 1 },
    { photo: 2, answer: "table", url: "../assets/img/table.jpg", id: 2 },
    { photo: 3, answer: "chair", url: "../assets/img/chair.jpg", id: 3 },
    { photo: 4, answer: "cup", url: "../assets/img/cup.jpg", id: 4 },
  ]);

  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <View style={globalStyles.proileIcon}>
            <ProfileCard />
          </View>
          <Text style={globalStyles.headerTitle}>Score</Text>
          <Text style={globalStyles.headerTitle}>25</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            // keyExtractor={(item) => item.id}
            horizontal={true}
            data={score}
            renderItem={({ item }) => <ScoreCard item={item} />}
          />
        </View>
        <Button
          title="go to Capture"
          onPress={() => navigation.navigate("Capture")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4em",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: "2em",
    // justifyContent: "space-between",
  },
});
