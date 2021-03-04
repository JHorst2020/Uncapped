import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'; 

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
    <>
      <li onClick={openMenu} style={{ textDecoration: "none", color: "white", "font-weight": "bold", cursor:"pointer"}}>
        <i className="fas fa-user-circle fa-2x" />
      </li>
      {showMenu && (
        <>
        <ul className="profile-dropdown">
          <li style={{color:"white"}}>{user.username}</li>
          <li style={{color:"white"}}>{user.email}</li>
        </ul>
          <li style={{color:"white", fontWeight:"bold", cursor:"pointer", textDecoration:"none"}} onClick={logout}>
            Log Out
          </li>
          </>
      )}
    </>
  );
}

export default ProfileButton;
