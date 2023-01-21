import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import '../styles/AddNote.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { GlobalContext } from '../context/GlobalContext';

const AddNote = () => {
  const navigate = useNavigate();
  const { getNotes } = GlobalContext();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !message || !category) {
      console.log('error');
      return false;
    }
    createNote();
    getNotes();
    navigate('/dashboard');
  };

  const createNote = async () => {
    const notesCollectionRef = collection(db, 'notes');
    const data = {
      title,
      message,
      category,
    };
    await addDoc(notesCollectionRef, data);
  };

  return (
    <div className="add__note__main">
      <Navbar />
      <div className="add__note__container">
        <h3>Add New Note</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="note__title">
            <label htmlFor="">Note title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="note__content">
            <label htmlFor="">Note Content</label>
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="add__category">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="personal">Personal</option>
              <option value="religious">Religious</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
            </select>
          </div>
          <div className="add__cancel__note">
            <Link to="/dashboard">Cancel</Link>
            <input type="submit" value="Add Note" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
