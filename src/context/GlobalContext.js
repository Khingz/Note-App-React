import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducers";
import { db, auth, emailPassword } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { NOTE_ERROR, NOTE_SUCCESS } from "./actionTypes";



export const Notes = createContext();

//db variables
const notesCollectionRef = collection(db, "notes");

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: {
      loading: true,
      data: [],
      err: {}
    },
    user: {}
  });

  //get notes 
  const getNotes = async () => {
    try {
      const data = await getDocs(notesCollectionRef);
      const notes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({ type: NOTE_SUCCESS, payload: notes });
    } catch (err) {
      console.log(err);
      dispatch({ type: NOTE_ERROR, payload: err || 'An error occured please try again' });
    }
  };

  //signup user
  const signup = async (fullname, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(fullname, email, password);
      // const user = res.user;
      // await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   name,
      //   authProvider: "local",
      //   email,
      // });
      console.log(res);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
}

  return (
    <Notes.Provider value={{ state, dispatch, getNotes, signup }}>{children}</Notes.Provider>
  );
};

export default Context;

export const GlobalContext = () => {
  return useContext(Notes);
};
