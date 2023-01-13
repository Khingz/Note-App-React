import { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddNote from './pages/AddNote';
import Profile from './pages/Profile';
import SingleNote from './pages/SingleNote';
import { NoteContext } from "../src/context/Context";

//firebase imports
import { db } from "../src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { NOTE_ERROR, NOTE_SUCCESS } from "../src/context/actionTypes";
import UpdateNote from "./pages/UpdateNote";


function App() {
  const { dispatch } = NoteContext();
  useEffect(() => {
    const notesCollectionRef = collection(db, "notes");
    const getNotes = async () => {
      try {
        const data = await getDocs(notesCollectionRef);
        const notes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch({ type: NOTE_SUCCESS, payload: notes });
      } catch (err) {
        dispatch({ type: NOTE_ERROR, payload: err });
      }
    };

    getNotes();
  },);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/update-note/:noteId" element={<UpdateNote/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/note/:noteId" element={<SingleNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
