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
import RootNavigator from "./navigator/RootNavigator";

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
        <RootNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
