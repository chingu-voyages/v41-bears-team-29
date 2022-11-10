import { StyleSheet, Text, View, Button, TextInput } from "react-native";
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

export default function Addprofile() {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const kids = new KidsEndpoints(AuthState.user.token);

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };
  console.log(selectedImage);

  return (
    <Formik
      initialValues={{
        name: "",
        image: selectedImage,
        userId: AuthState.user.token,
      }}
      validationSchema={playersSchema}
      onSubmit={(values, actions) => {
        kids
          .createKid(values.name, values.image, values.userId)
          .then((data) => {
            console.log(data, "promise");
            AuthDispatch({ type: "add_new_kid", payload: data });
          })
          .catch((error) => {
            console.log("ERROR", error);
            // setErrorMsg(error.response.data.message);
            AuthDispatch({ type: "reset_all" });
          });
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
          <Button
            style={styles.addPhoto}
            onPress={openImagePickerAsync}
            title="+"
          />
          <Button
            style={styles.btn}
            onPress={formikProps.handleSubmit}
            title="ADD"
          />
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
    borderColor: "blue",
    borderWidth: 2,
  },

  formText: {
    fontSize: 25,
  },
  addPhoto: {},
  btn: {},
});
