import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Capture from './pages/Capture';
import Choosing from './pages/Choosing';
import Login from './pages/Login';
import ProfileAdmin from './pages/ProfileAdmin';
import Register from './pages/Register';
import Score from './pages/Score';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileAdmin">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Choosing" component={Choosing} />
        <Stack.Screen name="Score" component={Score} />
        <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
