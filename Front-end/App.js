import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Capture from "./screens/CaptureScreen";
import Choosing from "./screens/QuizScreen";
import Login from "./screens/LoginScreen";
import ProfileAdmin from "./screens/ProfileAdminScreen";
import Register from "./screens/RegisterScreen";
import Score from "./screens/ScoreScreen";
import Starting from "./screens/StartingScreen";
import { AuthProvider } from "./context/auth";
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
      <AuthProvider>
        <Stack.Navigator initialRouteName="Starting">
          <Stack.Screen name="Starting" component={Starting} />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Capture" component={Capture} />
          <Stack.Screen name="Choosing" component={Choosing} />
          <Stack.Screen name="Score" component={Score} />
          <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
