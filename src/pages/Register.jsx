import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Register.css'


const Register = () => {
  return (
    <div className="register__container">
      <h3 className="register__title">Welcome, please register to get started</h3>
      <form>
      <div className="fullname__container">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="username__container">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="password__container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="password__confirm__container">
          <label htmlFor="password__confirm">Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div className="register__login">
        <span>
          Already have an account?
          <Link to="/signin">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
