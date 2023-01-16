import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Register = () => {
  const { signup } = useAuth;
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname || !email || !password || !password2) {
      console.log('Fill in all fields');
      return false;
    }
    if (password !== password2) {
      console.log('Password does not match');
      return false;
    }
    signup(fullname, email, password)
  }
  return (
    <div className="register__container">
      <h3 className="register__title">
        Welcome, please register to get started
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="fullname__container">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="username__container">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password__container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password__confirm__container">
          <label htmlFor="password__confirm">Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) => setPassword2(e.target.value)}
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
