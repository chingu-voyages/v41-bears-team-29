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
  ScrollView,
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
        <ScrollView>
          <View style={styles.container}>
            <Text style={globalStyles.text}>
              Please log in to start playing with this incredible game
            </Text>
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
                    // console.log(data, "from submit signin");
                  })
                  .catch((error) => {
                    AuthDispatch({ type: "reset_all" });
                    console.log(error, "from submit signin");
                    // setError(error.response.data.message);
                  });
                actions.resetForm();
              }}
            >
              {(formikProps) => (
                <View>
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
                  <View>
                    <Text style={globalStyles.text}>
                      Don't have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text style={globalStyles.text}>Register</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={globalStyles.button}
                    onPress={formikProps.handleSubmit}
                  >
                    <Text style={globalStyles.buttonText}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            {/* <TouchableOpacity
            style={globalStyles.buttonSpecial}
            onPress={() => navigation.navigate("ProfileAdmin")}
          >
            <Text>Go to your profile</Text>
          </TouchableOpacity> */}
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
    gap: 15,
  },
});
