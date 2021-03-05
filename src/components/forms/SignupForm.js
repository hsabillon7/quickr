import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../../firebase";
import { validate } from "email-validator";
import Alert from "../shared/Alert";

const SignupForm = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");

  // Verifica que los datos ingresados sean correctos
  const handleVerify = (input) => {
    if (input === "fullname") {
      // Verificar el nombre del usuario
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      // Verificar el correo electrónico
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      // Verificar la contraseña
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      // Verificar la confirmación de la contraseña
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  };

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // Obtener el Unique Identifier generado para cada usuario
        // Firebase -> Authentication
        const uid = response.user.uid;

        // Construir el objeto que le enviaremos a la collección de "users"
        const data = {
          id: uid,
          email,
          fullname,
        };

        // Obtener la colección desde Firebase
        const usersRef = firebase.firestore().collection("users");

        // Almacenar la información del usuario que se registra en Firestore
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <View>
      {error ? <Alert type="error" title={error} /> : null}
      <Input
        placeholder="Full name"
        leftIcon={<Icon name="user" />}
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => {
          handleVerify("fullname");
        }}
        errorMessage={
          fullnameError ? "Por favor ingresa tu nombre completo" : ""
        }
      />
      <Input
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError ? "Por favor ingresa una dirección de correo válida" : ""
        }
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={
          passwordError
            ? "Por favor ingresa una contraseña de mínimo 6 caracteres"
            : ""
        }
      />
      <Input
        placeholder="Confirm password"
        leftIcon={<Icon name="lock" />}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("confirmPassword");
        }}
        errorMessage={
          confirmPasswordError
            ? "Por favor reingresa la contraseña y verifica que es correcta"
            : ""
        }
      />
      <Button title="Create account" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
