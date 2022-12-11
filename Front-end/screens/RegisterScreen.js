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
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";
import bgImage from "../assets/img/bg40.jpg";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import GoBackBtn from "../components/goBackBtn";
import UsersEndpoints from "../Api/Users";
import { Formik } from "formik";
import * as yup from "yup";

const usersEndpoints = new UsersEndpoints();

const ownersSchema = yup.object({
  username: yup.string().required().min(4),
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
  confirmPassword: yup
    .string()
    .required("Confirm password is required field")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function RegisterScreen({ navigation, display }) {
  const { AuthState, AuthDispatch } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Starting")}>
        <GoBackBtn />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            {/* <Text style={globalStyles.appName}>What's that?!</Text> */}
            <Text style={globalStyles.text}>
              Please register to start playing with this incredible game
            </Text>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={ownersSchema}
              onSubmit={(values, actions) => {
                usersEndpoints
                  .createUser(values.username, values.email, values.password)
                  .then((data) => {
                    // console.log(data, "from register");
                    AuthDispatch({ type: "update_user", payload: data });
                    navigation.navigate("Login");
                  })
                  .catch((error) => {
                    console.log(error, "from register");
                    setErrorMsg(error.response.data.message);
                    AuthDispatch({ type: "reset_all" });
                  });
                actions.resetForm();
              }}
            >
              {(formikProps) => (
                <View>
                  <Text style={globalStyles.errorText}>{errorMsg}</Text>
                  <TextInput
                    style={globalStyles.input}
                    onChangeText={formikProps.handleChange("username")}
                    placeholder="Username"
                    textContentType="username"
                    value={formikProps.values.username}
                    onBlur={formikProps.handleBlur("username")}
                  />
                  <Text style={globalStyles.errorText}>
                    {formikProps.touched.username &&
                      formikProps.errors.username}
                  </Text>
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
                    {formikProps.touched.password &&
                      formikProps.errors.password}
                  </Text>
                  <TextInput
                    style={globalStyles.input}
                    onChangeText={formikProps.handleChange("confirmPassword")}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={formikProps.values.confirmPassword}
                    onBlur={formikProps.handleBlur("confirmPassword")}
                  />
                  <Text style={globalStyles.errorText}>
                    {formikProps.touched.confirmPassword &&
                      formikProps.errors.confirmPassword}
                  </Text>
                  <View style={globalStyles.RegisterToSigninContainer}>
                    <Text style={globalStyles.text}>Have an account?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SignIn")}
                    >
                      <Text style={globalStyles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={globalStyles.button}
                    onPress={formikProps.handleSubmit}
                  >
                    <Text style={globalStyles.buttonText}>
                      Create an account
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
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
