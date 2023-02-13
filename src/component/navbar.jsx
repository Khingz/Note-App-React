import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { logOut, userInfo, user, getUserInfo } = AuthContext();
  const [loading, setLoading] = useState(true);

  console.log(user)

  const handleLogout = async () => {
    try{
      logOut();
      window.location.pathname = '/signin';
    }catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getUserInfo(user.uid)
    setLoading(false);
  }, [])

  if(loading) {
    return false;
  }

  if (!userInfo) {
    return false
  }

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
            <div className="nav__avatar">{userInfo.fullname[0].toUpperCase()}</div>
            <p className="username">{userInfo.fullname.split(" ")[0]}</p>
          </Link>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
