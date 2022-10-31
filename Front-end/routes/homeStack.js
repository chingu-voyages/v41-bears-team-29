import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import StartingScreen from "./screens/StartingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileAdminScreen from "./screens/ProfileAdminScreen";
import ChoosingScreen from "./screens/QuizScreen";
import ScoreScreen from "./screens/ScoreScreen";

const screens = {
  //by default the first obj is what is going to display first
  Starting: {
    screen: StartingScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

//on app.js
//import Navigator from routes/homeStack
//return( <Navigator />)
