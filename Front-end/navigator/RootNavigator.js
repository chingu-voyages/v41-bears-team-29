import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaptureScreen from "../screens/CaptureScreen";
import ChoosingScreen from "../screens/QuizScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileAdminScreen from "../screens/ProfileAdminScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ScoreScreen from "../screens/ScoreScreen";
import StartingScreen from "../screens/StartingScreen";
import SignInScreen from "../screens/SignInScreen";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Starting">
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          // headerTransparent: true,
        }}
      >
        <RootStack.Screen name="Starting" component={StartingScreen} />
        <RootStack.Screen name="SignIn" component={SignInScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
        <RootStack.Screen name="Capture" component={CaptureScreen} />
        <RootStack.Screen name="Choosing" component={ChoosingScreen} />
        <RootStack.Screen name="Score" component={ScoreScreen} />
        <RootStack.Screen name="ProfileAdmin" component={ProfileAdminScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
