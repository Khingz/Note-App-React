import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';
import Navbar from '../component/navbar';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import Spinner from '../component/Spinner';

import '../styles/SingleNote.css';

const SingleNote = () => {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { notes, getNotes } = NoteContext();

  const note = notes.find((note) => note.id === noteId);

  const handleDelete = async () => {
    const note = doc(db, 'notes', noteId);
    await deleteDoc(note, notes);
    await getNotes();
    navigate('/dashboard');
  };

  useEffect(
    () => {
      getNotes();
    },
    // eslint-disable-next-line
    []
  );


  return (
    <div>
      <Navbar />
      <div className="top__line"></div>
      <div className="single__note__container">
        <h4 className="single__note__title">{note.title}</h4>
        <p className="single__note__message">{note.message}</p>
        <div className="single__not__btn">
          <Link to="/dashboard">Back</Link>
          <Link to={`/update-note/${noteId}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="bottom__line"></div>
    </div>
  );
};

export default SingleNote;
