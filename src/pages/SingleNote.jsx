import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NoteContext } from "../context/Context";
import Navbar from "../component/navbar";


const SingleNote = () => {
  const { noteId } = useParams();
  const { state } = NoteContext();
  const { data, loading, err } = state.notes;
  const [noteItem, setNoteItem] = useState({})

  useEffect(() => {
    const note = data.find((note) => note.id === noteId);
    setNoteItem(note)
    console.log(note);
  }, [noteId, state, data]);

    //render if loading
    if (loading) {
      return (
        <div className="dashboard__main">
          <Navbar />
          <div className="dashboard__container">
            <h3>Loading...</h3>
          </div>
        </div>
      );
    }
  
    //render if error
    if ((Object.keys(err).length > 0) && (data.length < 0)) {
      return (
        <div className="dashboard__main">
          <Navbar />
          <div className="dashboard__container">
            <h3>Sorry an error occured, try again later...</h3>
          </div>
        </div>
      );
    }

  return (
    <div>
      <h2>{noteItem.title}</h2>
    </div>
  );
};

export default SingleNote;
