import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = AuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('')
    try {
      if (!email || !password) {
        setErr('Fill in all fields');
        return false;
      }
      let user = await signIn(email, password);
      console.log(user);
      navigate('/dashboard')
    } catch (err) {
      setErr(err.message);
      console.log(err);
    }
  };
  return (
    <div className="login__container">
      <h3 className="login__title">Hello, please login to continue</h3>
      <div className='register__err__container'>
        {err && <p className='register__err'>{err}</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="email__container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passeord__container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
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
