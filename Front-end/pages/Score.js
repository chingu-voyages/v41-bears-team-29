import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import bgImage from '../assets/img/bg40.jpg';
import { globalStyles } from '../styles/global';
import ProfileCard from '../components/profileCard';
import React, { useState } from 'react';

export default function Score({ navigation }) {
  const [score, setScore] = useState([
    { photo: 1, answer: 'something' },
    { photo: 2, answer: 'something' },
    { photo: 3, answer: 'something' },
  ]);

  return (
    <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <ProfileCard />
        <View style={globalStyles.btnContainer}>
          <Button title="<" onPress={() => navigation.navigate('Capture')} />
        </View>
        <Text>Score</Text>
        <Button
          title="go to Capture"
          onPress={() => navigation.navigate('Capture')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
