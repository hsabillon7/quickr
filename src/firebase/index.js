import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import getEnvVars from "../../enviroment";

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = getEnvVars();

// Valores de la configuración de Firebase
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Iniciarlizar firebase si no existe una instancia ejecutándose
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
