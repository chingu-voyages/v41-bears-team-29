import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackBtn";
import ProfileCard from "../components/card";
import { globalStyles } from "../styles/global";
import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/AuthContext";

export default function QuizScreen({ navigation }) {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <SafeAreaView style={styles.photoContainer}>
            {photo && (
              <Image
                source={{ uri: "data:image/jpg;base64," + photo.base64 }}
                style={styles.preview}
              />
            )}
          </SafeAreaView>
          <View style={globalStyles.profileIcon}>
            {/* <ProfileCard user={currentUser} /> */}
          </View>
        </View>
        <View style={styles.answerContainer}>
          <Button title={AuthState.correctAnswer} />
          <Button title="Wrong answer" />
          <Button title="see pictures" onPress={openImagePickerAsync} />
          <Button
            title="go to Score"
            onPress={() => navigation.navigate("Score")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  photoContainer: {
    width: 200,
    borderWidth: 2,
  },
  body: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  answerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
