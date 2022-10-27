import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Capture from "./screens/Capture";
import Choosing from "./screens/Choosing";
import Login from "./screens/Login";
import ProfileAdmin from "./screens/ProfileAdmin";
import Register from "./screens/Register";
import Score from "./screens/Score";
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
        <Stack.Navigator initialRouteName="Login">
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
