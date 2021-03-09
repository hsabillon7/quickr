import { firebase } from "../firebase";

// Permite verificar si un usuario ya ha iniciado sesión
// y evitar solicitar nuevamente las credenciales
const PersistLogin = () => {
  const userRef = firebase.firestore().collection("users");

  // Si el usuario ya se ha autenticado previamente, retornar
  // la información del usuario, caso contrario,retonar un objeto vacío.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userRef
        .doc(user.uid)
        .get()
        .then((document) => {
          return document.data();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return {};
};

export default PersistLogin;
