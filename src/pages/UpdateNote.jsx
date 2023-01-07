import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import "../styles/UpdateNote.css";

const UpdateNote = () => {
  return (
    <div className="update__note__main">
    <Navbar />
    <div className="update__note__container">
      <h3>Edit Note</h3>
      <form action="">
        <div className="update__note__title">
          <label htmlFor="title">Note title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="update__note__content">
          <label htmlFor="message">Note Content</label>
          <textarea name="note" id="note" cols="30" rows="10"></textarea>
        </div>
        <div className="update__category">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="personal">Personal</option>
            <option value="religious">Religious</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="update__cancel__note">
          <input type="submit" value="Update Note" />
          <Link to="/dashboard">Cancel</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default UpdateNote