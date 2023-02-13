import React from 'react';
import Navbar from '../component/navbar';
import { useParams, Link } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';
import { AuthContext } from '../context/AuthContext';
import Note from '../component/note';
import Spinner from '../component/Spinner';

import '../styles/CategorySorted.css';
import { useEffect } from 'react';
import { useState } from 'react';

const CategorySorted = () => {
  // const navigate = useNavigate();
  const [loading, setIsloading] =useState(true)
  const { category } = useParams();
  const { notes, categoryColorPicker, getNotes } = NoteContext();
  const { getUserInfo, user } = AuthContext()
  const sortedNotes = notes.filter(
    (note) => note.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(
    () => {
      getUserInfo(user.uid)
      getNotes();
      setIsloading(false)
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
  return (
    <div className="category__sorted__container">
      <Navbar />
      <div className="sorted__cat__container">
        <div className="sorted__home">
          <Link to="/dashboard">Home</Link>
        </div>
        <h2>{category}</h2>
        <div className="cat__sorted__notes">
          {sortedNotes.map((note) => {
            return (
              <div className="sorted__notes" key={note.id}>
                <Link to={`/notes/${note.id}`}>
                  <Note
                    title={note.title}
                    categoryColor={categoryColorPicker(note.category)}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySorted;
