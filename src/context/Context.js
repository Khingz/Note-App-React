import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducers";


export const Notes = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: {
      loading: true,
      data: [],
      err: {}
    },
    user: {},
  });

  return (
    <Notes.Provider value={{ state, dispatch }}>{children}</Notes.Provider>
  );
};

export default Context;

export const NoteContext = () => {
  return useContext(Notes);
};
