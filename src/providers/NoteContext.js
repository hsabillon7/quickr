import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const noteReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createNote":
      return { ...state, notes: [...notes, action.payload] };
    case "getNotes":
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de notas
const notesRef = firebase.firestore().collection("notes");

// Almacena una nueva nota para el usuario actual
const createNote = (dispatch) => (title, content, timestamp, author) => {
  const data = {
    title,
    content,
    timestamp,
    userId: author,
  };

  notesRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "Note added!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Obtener las notas del usuario
const getNotes = (dispatch) => (userId) => {
  notesRef
    .where("userId", "==", userId)
    .orderBy("timestamp", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const notes = [];

        querySnapshot.forEach((doc) => {
          const note = doc.data();
          note.id = doc.id;
          notes.push(note);
        });

        dispatch({ type: "getNotes", payload: notes });
      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  noteReducer,
  {
    createNote,
    getNotes,
  },
  {
    notes: [],
    errorMessage: "",
  }
);
