import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../shared/Logo";
import SignupForm from "../forms/SignupForm";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SignupForm navigation={navigation} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>
          Already got an account? <Text style={styles.signin}>Sign in</Text>
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
  signin: {
    color: theme.colors.primary,
  },
});

export default Signup;
