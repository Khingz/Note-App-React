import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './Reducers';
import { db, auth } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { NOTE_ERROR, NOTE_SUCCESS } from './actionTypes';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Notes = createContext();

//db variables
const notesCollectionRef = collection(db, 'notes');

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: {
      loading: true,
      data: [],
      err: {},
    },
    user: {},
  });

  //get notes
  const getNotes = async () => {
    try {
      const data = await getDocs(notesCollectionRef);
      const notes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({ type: NOTE_SUCCESS, payload: notes });
    } catch (err) {
      console.log(err);
      dispatch({
        type: NOTE_ERROR,
        payload: err || 'An error occured please try again',
      });
    }
  };

  //signup user

const signup = (fullname, email, password) => {
  createUserWithEmailAndPassword(auth, fullname, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return (
    <Notes.Provider value={{ state, dispatch, getNotes, signup }}>
      {children}
    </Notes.Provider>
  );
};

export default Context;

export const GlobalContext = () => {
  return useContext(Notes);
};
