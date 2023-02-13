import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../component/navbar';
import '../styles/UpdateProfile.css';


import '../styles/Profile.css';


const UpdateProfile = () => {
  const { userInfo } = AuthContext();
  const [fullname, setFullname] = useState(userInfo.fullname);
  console.log(userInfo)

  return (
    <div className="update__profile">
      <Navbar />
      <div className="update__profile__container">
      <h3>Update Profile</h3>
      <form action="">
        <div className="update__fullname">
          <label htmlFor="fullname">Email</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateProfile;
