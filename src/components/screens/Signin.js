import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Input, Button } from "react-native-elements";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation, route }) => {
  const { userCreated } = route.params;
  return (
    <View style={styles.container}>
      <Logo />
      {userCreated ? (
        <Alert type="success" title="User created! You can now sign in!" />
      ) : null}
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
