import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import bgImage from "../assets/img/bg40.jpg";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import GoBackBtn from "../components/goBackBtn";
import UsersEndpoints from "../Api/Users";
import { Formik } from "formik";
import * as yup from "yup";

const userEndpoints = new UsersEndpoints();

const ownersSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
});

export default function SignInScreen({ navigation, display }) {
  const { AuthDispatch } = useContext(AuthContext);
  const [error, setError] = useState("");
  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Starting")}>
        <GoBackBtn />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text>Welcome to</Text>
          <Text style={globalStyles.appName}>What's that?!</Text>
          <Text>Please log in to start playing with this incredible game</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={ownersSchema}
            onSubmit={(values, actions) => {
              userEndpoints
                .authUser(values.email, values.password)
                .then((data) => {
                  AuthDispatch({ type: "update_user", payload: data });
                  navigation.navigate("Login");
                  console.log(data);
                })
                .catch((error) => {
                  AuthDispatch({ type: "reset_all" });
                  console.log(error);
                  setError(error.response.data.message);
                });
              actions.resetForm();
            }}
          >
            {(formikProps) => (
              <View>
                <Text>{error}</Text>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={formikProps.handleChange("email")}
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={formikProps.values.email}
                  onBlur={formikProps.handleBlur("email")}
                />
                <Text style={globalStyles.errorText}>
                  {formikProps.touched.email && formikProps.errors.email}
                </Text>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={formikProps.handleChange("password")}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={formikProps.values.password}
                  onBlur={formikProps.handleBlur("password")}
                />
                <Text style={globalStyles.errorText}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                <View style={globalStyles.RegisterToSigninContainer}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text>Register</Text>
                  </TouchableOpacity>
                </View>
                <Button title="Sign in" onPress={formikProps.handleSubmit} />
              </View>
            )}
          </Formik>
          <Button
            title="Go to your profile"
            onPress={() => navigation.navigate("ProfileAdmin")}
          />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
