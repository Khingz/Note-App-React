import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    //set up state for user
    const [currentUser, setCurrentUser] = useState();
 

    //create user function
    const signup = async (fullname, email, password) => {
        await auth.createUserWithEmailAndPassword(fullname, email, password)
        .then(user => {
            setCurrentUser(user)
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //     })

    //     return unsubscribe;
    // }, [])

    const value = {
        currentUser,
        signup
    }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
