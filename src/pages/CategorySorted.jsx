import React from 'react';
import Navbar from '../component/navbar';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Note from '../component/note';

import '../styles/CategorySorted.css'

const CategorySorted = () => {
  // const navigate = useNavigate();
  const { category } = useParams();
  const { state, categoryColorPicker } = GlobalContext();
  const { data } = state.notes;
  const sortedNotes = data.filter(note => note.category.toLowercase() === category.toLowerCase());
console.log(data);
  return (
    <div className='category__sorted__container'>
      <Navbar />
      <div className="sorted__cat__container">
        <h2>{category}</h2>
        <div className="cat__sorted__notes">
          {sortedNotes.map(note => {
            return (
              <Link to={`/notes/${note.id}`} key={note.id}>
              <Note
                title={note.title}
                categoryColor={categoryColorPicker(note.category)}
              />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySorted;
