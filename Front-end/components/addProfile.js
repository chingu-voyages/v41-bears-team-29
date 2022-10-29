import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function Addprofile({
  submitHandle,
  openImagePickerAsync,
  changeHandler,
  newUser,
}) {
  return (
    <View style={styles.addProfile}>
      <Text style={styles.formText}>Name:</Text>
      <TextInput style={globalStyles.input} onChangeText={changeHandler} />
      <Text style={styles.formText}>Photo:</Text>
      <Button
        style={styles.addPhoto}
        onPress={openImagePickerAsync}
        title="+"
      />
      <Button
        style={styles.btn}
        onPress={() => submitHandle(newUser)}
        title="ADD"
      />
    </View>
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
