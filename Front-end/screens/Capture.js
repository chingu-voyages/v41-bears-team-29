import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import bgImage from "../assets/img/bg40.jpg";
import GoBackBtn from "../components/goBackbtn";
import ProfileCard from "../components/card";
import { globalStyles } from "../styles/global";
import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/auth";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function Capture({ navigation }) {
  const { currentUser, photo, setPhoto } = useContext(AuthContext);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [showCamera, setShowCamera] = useState(true);
  const [newPhoto, setNewPhoto] = useState(null);
  let cameraRef = useRef(null);

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

  const takePic = async () => {
    if (cameraRef) {
      try {
        let newPic = await cameraRef.current.takePictureAsync({
          allowEditing: true,
          aspect: [6, 8],
          quality: 1,
        });
        setNewPhoto(newPic.uri);
        return newPic;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <GoBackBtn />
        </TouchableOpacity>
        <View styles={styles.cameraContainer}>
          <Camera style={styles.camera} ref={cameraRef}></Camera>
        </View>
        <View style={styles.rightColumn}>
          <View style={globalStyles.profileIcon}>
            <ProfileCard user={currentUser} />
          </View>
          <Button
            onPress={async () => {
              const r = await takePic();
              Alert.alert("debug", JSON.stringify(r));
              setPhoto(r.uri);
            }}
            title="Take pic"
          />
          <Button title="retake" onPress={() => setShowCamera(true)} />
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
    height: "100%",
    justifyContent: "space-between",
  },
  cameraContainer: {
    padding: 2,
    margin: 10,
    borderWidth: 2,
    borderColor: "blue",
  },
  camera: {
    borderWidth: 2,
    width: 800,
    height: "100%",
  },
});
