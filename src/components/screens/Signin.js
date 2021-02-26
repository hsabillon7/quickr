import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Image, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../shared/Logo";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Input placeholder="Email" leftIcon={<Icon name="envelope" />} />
      <Input placeholder="Password" leftIcon={<Icon name="lock" />} />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Button title="Signin" />
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
  },
  forgotPassword: {
    textAlign: "right",
  },
});

export default Login;
