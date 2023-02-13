import React, { useEffect } from 'react';
import Navbar from '../component/navbar';
import '../styles/Profile.css';
import { AuthContext } from '../context/AuthContext';
import { NoteContext } from '../context/NoteContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { userInfo, user, getUserInfo } = AuthContext();
  const { notes } = NoteContext();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserInfo(user.uid);
  }, 
    // eslint-disable-next-line
  []);

  if (!userInfo) {
    return false;
  }
  return (
    <div className="profile__main">
      <Navbar />
      <div className="profile__container">
        <div className="user__profile__avatar">
          <Link to="/dashboard" className="profile__home">
            Home
          </Link>

          <div className="profile__avatar">
            <p className="avatar">{userInfo.fullname[0].toUpperCase()}</p>
          </div>
          <p className="user__profile__name">{userInfo.fullname}</p>
          <div className="profile__user__details">
            <ul>
              <li>
                User Id: <span>{user.uid}</span>
              </li>
              <li>
                Email: <span>{userInfo.email}</span>
              </li>
              <li>
                Note Count:{' '}
                <span>
                  {notes.length > 1
                    ? ` You have ${notes.length} notes`
                    : `You have ${notes.length} note`}
                </span>
              </li>
            </ul>
          </div>
          <div className="profile__buttons">
            <Link to={`/profile/update-profile/${user.uid}`}>
              {' '}
              Edit Profile
            </Link>
            <button>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
