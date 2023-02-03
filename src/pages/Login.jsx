import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className="login__container">
      <h3 className="login__title">Hello, please login to continue</h3>
      <form onSubmit={handleSubmit}>
        <div className="email__container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="passeord__container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <div className="login__register">
        <span>
          Don't have account?
          <Link to="/signup">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
