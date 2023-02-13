import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, setDoc, getDoc  } from "firebase/firestore";


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
  const [userInfo, setUserInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  //Sign Up function
  const signUp = async (email, password, fullname) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const ref = doc(db, 'users', result.user.uid)
      // const docRef = await setDoc(ref, {fullname, email, id: result.user.uid})
      await setDoc(ref, {fullname, email})
      .then((us) => {
        console.log('Registerwd successfully')
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
    return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      await getUserInfo(result.user.uid)
    })
  };

  //get user info
  const getUserInfo = async (userId) => {
      const docRef = doc(db, 'users', userId)
      const docSnap = await getDoc(docRef) 
      if(docSnap.exists()) {
        const data = docSnap.data();
        setUserInfo(data);
      } else {
        console.log('no data');
      }
  }

  //SignOut function
  const logOut = () => {
    return signOut(auth)
  }

  //UseEffect on page load to check if there is a user with help of firebase onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, []);

  return <Auth.Provider value={{user, userInfo, signIn, signUp, logOut, getUserInfo}}>{children}</Auth.Provider>;
};

export default UserContext;

export const AuthContext = () => {
  return useContext(Auth);
};
