import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/auth";
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
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
