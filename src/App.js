import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddNote from './pages/AddNote';
import Profile from './pages/Profile';
import SingleNote from './pages/SingleNote';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/note/:noteId" element={<SingleNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
