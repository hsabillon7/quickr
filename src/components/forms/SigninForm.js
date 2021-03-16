import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import Alert from "../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";

const SigninForm = () => {
  // Implementación del Context para funcionalidades de autenticación
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError(state.errorMessage);
  }, [state.errorMessage]);

  useEffect(() => {
    console.log(state.user);
  }, [state.user]);

  // Verifica que se ingresan los datos del email y el password
  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  const handleSignin = () => {
    // Iniciar sesión implementado el Contexto de autenticación
    signin(email, password);
  };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <Input
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError
            ? "Por favor ingresa tu cuenta de correo electrónico"
            : null
        }
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Por favor ingresa tu contraseña" : null}
      />
      <Button title="Signin" onPress={handleSignin} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninForm;
