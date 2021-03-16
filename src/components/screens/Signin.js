import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SigninForm />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>
          Don't have an account? <Text style={styles.signup}>Sign up</Text>
        </Text>
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
    color: theme.colors.primary,
  },
  signup: {
    color: theme.colors.primary,
  },
});

export default Login;
