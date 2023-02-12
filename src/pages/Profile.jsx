import React from 'react';
import Navbar from '../component/navbar';
import '../styles/Profile.css';
import { AuthContext } from '../context/AuthContext';
import {Link} from 'react-router-dom';

const Profile = () => {
  const { userInfo, user } = AuthContext();
  return (
    <div className="container__main">
      <Navbar />
      <div className="profile__container">
        <div className="user__profile__avatar">
          <div className="profile__avatar">
            <p>{userInfo.fullname[0].toUpperCase()}</p>
          </div>
          <p className="user__profile__name">{userInfo.fullname}</p>
          <div className="profile__user__details">
            <ul>
              <li>User Id: {user.id}</li>
              <li>Email: {userInfo.email}</li>
            </ul>
          </div>
          <div className="profile__buttons">
            <Link to='/'>Home</Link>
            <Link to='/update-profile'>Update Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
