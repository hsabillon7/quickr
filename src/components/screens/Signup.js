import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Logo from "../shared/Logo";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View>
      <Logo />
      <Input placeholder="Full name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm password" />
      <Button title="Create account" />
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
