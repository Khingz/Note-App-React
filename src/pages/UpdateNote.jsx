import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import "../styles/UpdateNote.css";

const UpdateNote = () => {
  return (
    <div className="add__note__main">
    <Navbar />
    <div className="add__note__container">
      <h3>Add New Note</h3>
      <form action="">
        <div className="note__title">
          <label htmlFor="">Note title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="note__content">
          <label htmlFor="">Note Content</label>
          <textarea name="note" id="note" cols="30" rows="10"></textarea>
        </div>
        <div className="add__category">
          <label for="category">Category</label>
          <select name="category" id="category">
            <option value="personal">Personal</option>
            <option value="religious">Religious</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="add__cancel__note">
          <input type="submit" value="Add Note" />
          <Link to="/dashboard">Cancel</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default UpdateNote