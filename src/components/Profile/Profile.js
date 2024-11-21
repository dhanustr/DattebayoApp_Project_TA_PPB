// src/components/ProfileIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa'

const ProfileIcon = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/Profile'); 
  };

  return (
    <div className="profile-icon" onClick={handleProfileClick}>
      <FaUserCircle className="profile-icon-img" />
    </div>
  );
};

export default ProfileIcon;
