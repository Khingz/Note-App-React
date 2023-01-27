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
  const { state, getNotes } = NoteContext();
  const { data, loading, err } = state.notes;

  const note = data.find((note) => note.id === noteId);

  const handleDelete = async () => {
    const note = doc(db, 'notes', noteId);
    await deleteDoc(note, data);
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

  //render if loading
  if (loading) {
    return (
      <div className="dashboard__main">
        <Navbar />
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      </div>
    );
  }

  //render if error
  if (Object.keys(err).length > 0 && data.length < 0) {
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
