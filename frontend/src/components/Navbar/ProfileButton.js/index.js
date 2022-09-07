import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="dropdown-menu">
      <a class = "profile-icon" onClick={openMenu}>
        <AccountCircleOutlinedIcon/>
      </a>
        {showMenu && (
          <div className="profile-dropdown-container">
            <ul className="menu-item">
              
              <li className="username">{user.username}</li>
              <li className="email">{user.email}</li>
              <li>
                <p className="logout-button" onClick={logout}>Log Out</p>
              </li>
            </ul>
          </div>
        )}
    </div>
  );
}

export default ProfileButton;
