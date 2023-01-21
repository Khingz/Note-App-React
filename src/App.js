import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddNote from './pages/AddNote';
import Profile from './pages/Profile';
import SingleNote from './pages/SingleNote';
import UpdateNote from './pages/UpdateNote';
import ScrollToTop from './helpers/scrollToTop';
import CategorySorted from './pages/CategorySorted';

import './App.css';


function App() {
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
          <Route path="/notes/:noteId" element={<SingleNote />} />
          <Route path="/notes/categories/:category" element={<CategorySorted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
