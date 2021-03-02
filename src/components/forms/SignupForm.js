import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../../firebase";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Input
        placeholder="Full name"
        leftIcon={<Icon name="user" />}
        value={fullname}
        onChangeText={setFullname}
      />
      <Input
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Confirm password"
        leftIcon={<Icon name="lock" />}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Create account" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
