import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { AuthContext } from '../context/AuthContext';

const navbar = () => {
  const { logOut, user, userInfo } = AuthContext();
  console.log(user);

  const handleLogout = async () => {
    try{
      logOut();
      window.location.pathname = '/signin';
    }catch(err) {
      console.log(err)
    }
  };
  return (
    <div className="navbar__container">
      <div className="brand__name">
        <Link to="/dashboard">
          Kui<span>Notes</span>
        </Link>
      </div>
      <div className="nav__user">
        <div className="nav__username">
          <Link to="/profile">
            <div className="nav__avatar">{user.email[0].toUpperCase()}</div>
            <p className="username">{user.email}</p>
          </Link>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default navbar;
