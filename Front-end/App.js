import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaptureScreen from "./screens/CaptureScreen";
import ChoosingScreen from "./screens/QuizScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileAdminScreen from "./screens/ProfileAdminScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ScoreScreen from "./screens/ScoreScreen";
import StartingScreen from "./screens/StartingScreen";
import SignInScreen from "./screens/SignInScreen";
// import { AuthProvider } from "./context/auth";
import AuthContextProvider from './context/AuthContext'
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Gloria-regular": require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
    "Schoolbell-regular": require("./assets/fonts/Schoolbell-Regular.ttf"),
    "FuzzyBubbles-Bold": require("./assets/fonts/FuzzyBubbles-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator initialRouteName="Starting">
          <Stack.Screen name="Starting" component={StartingScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Capture" component={CaptureScreen} />
          <Stack.Screen name="Choosing" component={ChoosingScreen} />
          <Stack.Screen name="Score" component={ScoreScreen} />
          <Stack.Screen name="ProfileAdmin" component={ProfileAdminScreen} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
