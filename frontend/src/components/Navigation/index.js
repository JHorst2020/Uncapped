import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div>
      <ul id="top-nav-bar">
        <li>
          <h2>UNCAPP'D</h2>
        </li>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/scotch">
            Browse Scotch
          </NavLink>
          <NavLink to='/speakeasy'>
            The Speakeasy
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
