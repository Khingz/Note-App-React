import React from 'react';
import Navbar from '../component/navbar';
import { useParams, Link } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';
import Note from '../component/note';
import Spinner from '../component/Spinner';

import '../styles/CategorySorted.css';
import { useEffect } from 'react';

const CategorySorted = () => {
  // const navigate = useNavigate();
  const { category } = useParams();
  const { state, categoryColorPicker, getNotes } = NoteContext();
  const { data, loading } = state.notes;
  const sortedNotes = data.filter(
    (note) => note.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(
    () => {
      getNotes();
    },
    // eslint-disable-next-line
    []
  );
  console.log(data);

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
