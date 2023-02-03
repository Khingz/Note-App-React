import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase-config';

export const Auth = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)

  //Sign Up function
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
  });
  return <Auth.Provider value={{user, signIn, signUp, signOut}}>{children}</Auth.Provider>;
};

export default UserContext;

export const AuthContext = () => {
  return useContext(Auth);
};
