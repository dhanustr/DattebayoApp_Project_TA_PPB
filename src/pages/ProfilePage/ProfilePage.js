// src/pages/ProfilePage.js
import React from 'react';
import './ProfilePage.css';


const ProfilePage = () => {
  const user = {
    name: 'Dhanu Satria Atmaja',
    NIM: '21120122140127',
    email: 'dhanu.2atmaja@gmail.com',
    bio: 'Saya adalah Dhanu, Dhanu adalah saya',
    avatar: '/profile.jpg',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2 className="profile-name">{user.name}</h2>
        <h3 className='profile-NIM'>{user.NIM}</h3>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
