import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackBtn";
import RetakeBtn from "../components/retakeBtn";
import { globalStyles } from "../styles/global";
import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/AuthContext";

export default function QuizScreen({ navigation }) {
  const { AuthState, AuthDispatch, photo } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const answerHandle = (str) => {
    Alert.alert(str, "", [
      ({
        text: "Oky",
        onPress: () => console.log("Ok pressed"),
      },
      { text: "OK", onPress: () => console.log(str) }),
    ]);
  };
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <GoBackBtn />
          </TouchableOpacity>
          <SafeAreaView style={styles.photoContainer}>
            {AuthState.photo && (
              <Image
                source={{ uri: "data:image/jpg;base64," + photo.base64 }}
                style={styles.preview}
              />
            )}
            {!AuthState.photo && (
              <Image
                style={styles.preview}
                source={require("../assets/img/chair.jpg")}
              />
            )}
          </SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
            <RetakeBtn />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.answerContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => answerHandle("Correct")}
        >
          <Text style={globalStyles.buttonText}>{AuthState.correctAnswer}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => answerHandle("Try again")}
        >
          <Text style={globalStyles.buttonText}>Table</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => answerHandle("Try again")}
        >
          <Text style={globalStyles.buttonText}>Tree</Text>
        </TouchableOpacity>
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
    borderWidth: 5,
    borderColor: "#BEAEE2",
    flex: 1,
    borderRadius: 25,
    overflow: "hidden",
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
    flex: 1,
    width: "100%",
  },
});
