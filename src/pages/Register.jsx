import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate()
  const { signUp } = AuthContext();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      if (!fullname || !email || !password || !password2) {
        setErr('Fill in all fields');
        return false;
      }
      if (password !== password2) {
        setErr('Password do not match');
        return false;
      }
      await signUp(email, password, fullname);
      navigate('/signin')
    } catch (err) {
      setErr(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="register__container">
      <h3 className="register__title">
        Welcome, please register to get started
      </h3>
      <div className='register__err__container'>
        {err && <p className='register__err'>{err}</p>}
      </div>
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
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password__container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password__confirm__container">
          <label htmlFor="password__confirm">Confirm Password</label>
          <input
            type="password"
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
