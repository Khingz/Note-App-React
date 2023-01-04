import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NoteContext } from "../context/Context";

const SingleNote = () => {
  const { noteId } = useParams();
  const { state } = NoteContext();

  useEffect(() => {
    const { data } = state.notes;

    const note = data.find((note) => note.id === noteId);
    console.log(note);
  }, []);

  return (
    <div>
      {/* <h3>{note.title}</h3>
        <p>{note.mesaage}</p> */}
    </div>
  );
};

export default SingleNote;
