import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Capture from "./pages/Capture";
import Choosing from "./pages/Choosing";
import Login from "./pages/Login";
import ProfileAdmin from "./pages/ProfileAdmin";
import Register from "./pages/Register";
import Score from "./pages/Score";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
