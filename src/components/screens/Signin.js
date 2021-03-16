import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SigninForm />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
  forgotPassword: {
    textAlign: "right",
  },
});

export default Login;
