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
import ProtectedRoutes from './component/ProtectedRoutes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/add-note"
            element={
              <ProtectedRoutes>
                <AddNote />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/update-note/:noteId"
            element={
              <ProtectedRoutes>
                <UpdateNote />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />{' '}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/notes/:noteId"
            element={
              <ProtectedRoutes>
                <SingleNote />{' '}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/notes/categories/:category"
            element={
              <ProtectedRoutes>
                <CategorySorted />{' '}
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
