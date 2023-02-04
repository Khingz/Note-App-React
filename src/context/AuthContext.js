import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, setDoc } from "firebase/firestore";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase-config';

export const Auth = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)

  //Sign Up function
  const signUp = async (email, password, fullname) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      console.log(result);
      const ref = doc(db, 'users', result.user.id)
      const docRef = await setDoc(ref, {fullname})
      .then(() => {
        console.log(docRef);
      })
      .catch(e =>{
        console.log(e);
      })
    })
    .catch(err => {
      console.log(err);
    })
  };

  //Sign In function
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //UseEffect on page load to check if there is a user with help of firebase onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, []);

  return <Auth.Provider value={{user, signIn, signUp, signOut}}>{children}</Auth.Provider>;
};

export default UserContext;

export const AuthContext = () => {
  return useContext(Auth);
};
