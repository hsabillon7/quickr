import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";
import { validate } from "email-validator";
import Alert from "../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";

const SigninForm = () => {
  // Implementación del Context para funcionalidades de autenticación
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

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
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          handleVerify("email");
        }}
        error={emailError}
      />
      {emailError && (
        <Caption>Por favor ingresa tu cuenta de correo electrónico</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          handleVerify("password");
        }}
        error={passwordError}
      />
      {passwordError && <Caption>Por favor ingresa tu contraseña</Caption>}
      <Button mode="contained" style={styles.button} onPress={handleSignin}>
        Signin
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SigninForm;
