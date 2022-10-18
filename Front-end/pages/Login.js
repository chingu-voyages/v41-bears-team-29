import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProfileCard from "../components/profileCard";
import bgImage from "../assets/img/bg40.jpg";
import { globalStyles } from "../styles/global";
import React, { useState } from "react";
import GoBackBtn from "../components/goBackbtn";

export default function Login({ navigation }) {
  const [users, setUsers] = useState([
    { name: "Tom", id: "1" },
    { name: "Alise", id: "2" },
    { name: "Javi", id: "3" },
  ]);
  const onPressProfileHandler = (profile) => {
    navigation.navigate("Capture");
    console.log("click", profile);
    // set CurrentProfile
  };

  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.appName}>What's that?!</Text>
        </View>
        <Text style={globalStyles.headerTitle}>Who is ready to play?</Text>
        <View style={styles.profiles}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={users}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={() => onPressProfileHandler(item)}
              >
                <ProfileCard user={item} />
              </TouchableOpacity>
            )}
          />
        </View>

        <Button
          title="go to ProfileAdmin"
          onPress={() => navigation.navigate("ProfileAdmin")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4em",
  },
  profiles: {
    flexDirection: "row",
  },
  profileContainer: {
    margin: "1em",
    height: 200,
    width: 200,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
  },
});
