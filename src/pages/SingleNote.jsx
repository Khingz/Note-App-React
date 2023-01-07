import React from 'react';
import { useParams } from 'react-router-dom';
import { NoteContext } from '../context/Context';
import Navbar from '../component/navbar';

const SingleNote = () => {
  const { noteId } = useParams();
  const { state } = NoteContext();
  const { data, loading, err } = state.notes;

  const note = data.find((note) => note.id === noteId);

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
      <h2>{note.title}</h2>
      <p>{note.message}</p>
    </div>
  );
};

export default SingleNote;
