import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const navbar = () => {
  return (
    <div className="navbar__container">
      <div className="brand__name">
        <Link to="/dashboard">
          Kui<span>Notes</span>
        </Link>
      </div>
      <div className="nav__user">
        <div className="nav__username">
          <Link to='/profile'>
            <div className="nav__avatar">A</div>
            <p className="username">Alan</p>
          </Link>
        </div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default navbar;