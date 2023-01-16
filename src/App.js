import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddNote from './pages/AddNote';
import Profile from './pages/Profile';
import SingleNote from './pages/SingleNote';
import { NoteContext } from './context/NoteContext';
import UpdateNote from './pages/UpdateNote';
import ScrollToTop from './helpers/scrollToTop';

function App() {
  const { getNotes } = NoteContext();
  useEffect(() => {
    getNotes();
  }, [getNotes]);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/update-note/:noteId" element={<UpdateNote />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/note/:noteId" element={<SingleNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
