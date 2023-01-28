import React, { createContext, useReducer, useContext } from 'react'

export const Auth = createContext();


const UserContext = ({children}) => {
    const [state] = useReducer('HELLO', {
       auth: {
        name: 'Alan'
       }
      });
    
  return (
    <Auth.Provider value={{state}}>{children}</Auth.Provider>
  )
}

export default UserContext


export const AuthContext = () => {
    return useContext(Auth);
  };