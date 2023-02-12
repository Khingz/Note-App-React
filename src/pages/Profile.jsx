import React from 'react';
import Navbar from '../component/navbar';
import '../styles/Profile.css';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { userInfo } = AuthContext();
  return (
    <div className="container__main">
      <Navbar />
      <div className="profile__container">
        <div className="user__profile__avatar">
          <p className="profile__avatar">
            {userInfo.fullname[0].toUpperCase()}
          </p>
          <p className="user__profile__name">{userInfo.fullname}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
