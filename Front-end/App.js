import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Capture from "./screens/Capture";
import Choosing from "./screens/Choosing";
import Login from "./screens/Login";
import ProfileAdmin from "./screens/ProfileAdmin";
import Register from "./screens/Register";
import Score from "./screens/Score";
import { AuthProvider } from "./context/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* Change initialRouteName to your current working page */}
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
