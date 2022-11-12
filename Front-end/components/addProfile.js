import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import KidsEndpoints from "../Api/Kids";
import { AuthContext } from "../context/AuthContext";
import * as ImagePicker from "expo-image-picker";

const playersSchema = yup.object({
  name: yup.string().required().min(4),
});
const kids = new KidsEndpoints();

export default function Addprofile() {
  const {
    AuthState,
    AuthDispatch,
    setNewPlayers,
    selectedImage,
    setSelectedImage,
  } = useContext(AuthContext);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        image: selectedImage,
        userId: AuthState.user.id,
      }}
      validationSchema={playersSchema}
      onSubmit={(values, actions) => {
        setNewPlayers((prevPlayers) => {
          return [
            {
              name: values.name,
              image: values.image,
              id: Math.random().toString(),
            },
            ...prevPlayers,
          ];
        });
        // kids
        //   .createKid(values.name, values.userId, values.image)
        //   .then((data) => {
        //     console.log(data, "createkid");
        //     AuthDispatch({ type: "add_new_kid", payload: data });
        //   })
        //   .catch((error) => {
        //     console.log("from createkid", error);
        //     setErrorMsg(error.response.data.message);
        //     AuthDispatch({ type: "reset_all" });
        //   });
        actions.resetForm();
      }}
    >
      {(formikProps) => (
        <View style={styles.addProfile}>
          <Text style={styles.formText}>Name:</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={formikProps.handleChange("name")}
            textContentType="name"
            value={formikProps.values.name}
          />
          <Text style={styles.formText}>Photo:</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={openImagePickerAsync}
          >
            <Text style={globalStyles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={formikProps.handleSubmit}
          >
            <Text style={globalStyles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  addProfile: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },

  formText: {
    fontSize: 25,
  },
});
