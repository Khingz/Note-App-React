import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";
import "../styles/UpdateNote.css";
import { NoteContext } from "../context/Context";
import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";


const UpdateNote = () => {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { state } = NoteContext();
  const { data, loading, err } = state.notes;

  const note = data.find((note) => note.id === noteId);

  const [title, setTitle] = useState(note.title);
  const [message, setMessage] = useState(note.message);
  const [category, setCategory] = useState(note.category);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !message || !category) {
      console.log('error');
      return false;
    }
    const data = {
      title, message, category
    }
    updateNote(data)
    navigate(`/note/${noteId}`)
  };

  
  const updateNote = async (data) => {
    const note = doc(db, 'notes', noteId)
    await updateDoc(note, data)
  }

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

  
  return (
    <div className="update__note__main">
      <Navbar />
      <div className="update__note__container">
        <h3>Edit Note</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="update__note__title">
            <label htmlFor="title">Note title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="update__note__content">
            <label htmlFor="message">Note Content</label>
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="update__category">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="personal">Personal</option>
              <option value="religious">Religious</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
            </select>
          </div>
          <div className="update__cancel__note">
            <Link to="/dashboard">Cancel</Link>
            <input type="submit" value="Update Note" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
