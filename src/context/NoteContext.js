import React, { createContext, useContext, useState } from "react";
// import { reducer } from "./Reducers";
import { db } from "../firebase-config";
import {
  collection,
  // getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const Notes = createContext();

//db variables
const notesCollectionRef = collection(db, "notes");

const Context = ({ children }) => {
  const { user } = AuthContext();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  // const [state, dispatch] = useReducer(reducer, {
  //   notes: {
  //     loading: true,
  //     data: [],
  //     err: {},
  //   }
  // });

  //get notes
  // const getNotes = async () => {
  //   try {
  //     const data = await getDocs(notesCollectionRef);
  //     const notes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     dispatch({ type: NOTE_SUCCESS, payload: notes });
  //   } catch (err) {
  //     console.log(err);
  //     dispatch({
  //       type: NOTE_ERROR,
  //       payload: err || "An error occured please try again",
  //     });
  //   }
  // };

  const getNotes = async () => {
    const q = query(notesCollectionRef, where('userId', '==', `${user.uid}`));

    const unsub = onSnapshot(q, (query) => {
      const items = [];
      query.forEach((doc) => {
        console.log(doc);
        items.push({...doc.data(), id: doc.id});
      });
      setNotes(items);
      setLoading(false)
    });
    return () => {
      unsub();
    };
  };

  //assign color depending on category
  const categoryColorPicker = (category) => {
    if (category === "personal") {
      return "#1d3672";
    } else if (category === "religious") {
      return "#663e65";
    } else if (category === "business") {
      return "#a3436a";
    } else if (category === "education") {
      return "#df6f6a";
    } else {
      return "#1d3672";
    }
  };

  return (
    <Notes.Provider value={{ notes, loading, getNotes, categoryColorPicker }}>
      {children}
    </Notes.Provider>
  );
};

export default Context;

export const NoteContext = () => {
  return useContext(Notes);
};
