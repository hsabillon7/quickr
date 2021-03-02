import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Logo from "../shared/Logo";
import SignupForm from "../forms/SignupForm";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View>
      <Logo />
      <SignupForm />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Already got an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Signup;
