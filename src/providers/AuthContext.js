import createDataContext from "./createDataContext";
import { firebase } from "../firebase";
import PersistLogin from "../firebase/persistLogin";

// Acciones disponibles para el reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Permite el inicio de sesión mediante firebase con email y password
const signin = (dispatch) => (email, password) => {
  // Hacer la petición al API de firebasee
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      // Obtener el Unique Identifier generado para cada usuario
      // Firebase -> Authentication
      const uid = response.user.uid;

      // Obtener la colección desde Firebase
      const usersRef = firebase.firestore().collection("users");

      // Verificar que el usuario existe en Firebase authentication
      // y también está almacenado en la colección de usuarios.
      usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            dispatch({
              type: "errorMessage",
              payload: "User does not exist in the database!",
            });
          } else {
            // Llamar el reducer y enviarle los valores del usuario al estado
            dispatch({ type: "errorMessage", payload: "" });
            dispatch({ type: "signin", payload: firestoreDocument.data() });
          }
        });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
  },
  {
    user: {},
    errorMessage: "",
  }
);
