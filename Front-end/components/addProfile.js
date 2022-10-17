import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Addprofile({ submitHandle }) {
  const [newUser, setNewUser] = useState('');

  const changeHandler = (val) => {
    setNewUser(val);
  };

  return (
    <View style={styles.addProfile}>
      <Text style={styles.formText}>Name:</Text>
      <TextInput style={styles.input} onChangeText={changeHandler} />
      <Text style={styles.formText}>Photo:</Text>
      <Button
        style={styles.addPhoto}
        onPress={() => submitHandle(newUser)}
        title="+"
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addProfile: {
    flexDirection: 'row',
    gap: '1em',
    margin: '1em',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 8,
    borderRadius: 10,
    fontSize: '1rem',
  },
  formText: {
    fontSize: '2rem',
  },
});
