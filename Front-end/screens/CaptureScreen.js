import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackBtn";
import CameraBtn from "../components/cameraBtn";
import ProfileCard from "../components/card";
import { globalStyles } from "../styles/global";
import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Clarifai from "../Api/Clarifai";

const clarifai = new Clarifai(
  "w55zqbb8z4wu",
  "91fbf60c37ec4e22a53ad82cfda631ba",
  "what-is-that"
);

export default function CaptureScreen({ navigation }) {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [isCamera, setIsCamera] = useState(true);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [showCamera, setShowCamera] = useState(true);
  // const [photo, setPhoto] = useState();
  let cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions..</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    AuthDispatch({type: 'update_photo', payload: newPhoto})

    clarifai
      .predictByBytes(newPhoto.base64)
      .then((data) => {
        console.log(data);
        // console.log(data.regions[0].data.concepts[0].name);
        AuthDispatch({type: 'update_correct_answer', payload:data.regions[0].data.concepts[0].name })
        // setCorrectAnswer(data.regions[0].data.concepts[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsCamera(false);
  };

  const retake = () => {
    setIsCamera(true);
    // setPhoto(undefined);
    AuthDispatch({type: 'reset_photo'})
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <GoBackBtn />
        </TouchableOpacity>
        <View styles={styles.cameraContainer}>
          {isCamera && <Camera style={styles.camera} ref={cameraRef}></Camera>}
          {!isCamera && (
            <Image
              style={styles.camera}
              source={{ uri: "data:image/jpg;base64," + photo.base64 }}
            />
          )}
        </View>
        <View style={styles.rightColumn}>
          <TouchableOpacity onPress={takePic}>
            <CameraBtn />
          </TouchableOpacity>
          {/* <View style={globalStyles.profileIcon}> */}
          {/* <ProfileCard user={currentUser} /> */}
          {/* </View> */}

          <Button title="retake" onPress={retake} />
          <Button
            title="go to Choosing"
            onPress={() => navigation.navigate("Choosing")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
  rightColumn: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  cameraContainer: {
    flex: 5,
    borderWidth: 2,
    borderColor: "blue",
  },
  camera: {
    borderWidth: 2,
    width: 400,
    height: "100%",
  },
  preview: {
    width: 300,
    height: 300,
    borderWidth: 3,
  },
});
