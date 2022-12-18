import React from 'react';
import '../styles/Login.css'

const Login = () => {
  return (
    <div className="login__container">
      <form>
        <div className="username__container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
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
    </div>
  );
};

export default Login;
