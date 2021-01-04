import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import logoPic from "./scotchlogo.svg"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <span className="buffer" > <ProfileButton user={sessionUser}/></span>;
  } else {
    sessionLinks = (
      <div className="nav-link">
        <LoginFormModal />
      </div>
    );
  }

  return (
    <div className="navBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div id="logo">
          <img className="logo-pic" src={logoPic} />
          <div id="logoName">UNCAPP'D</div>
        </div>
      </Link>
      <ul id="top-nav-bar">
        <li class="nav-link">
          <NavLink exact to="/" style={{ textDecoration: "none", color: "white", "font-weight": "bold"}}>
            Home
          </NavLink>
        </li>
        <li class="nav-link">
          <NavLink to="/scotch" style={{ textDecoration: "none", color: "white", "font-weight": "bold"}}>
            Browse Scotch
          </NavLink>
        </li>
        <li class="nav-link">
          <NavLink to="/speakeasy" style={{ textDecoration: "none", color: "white", "font-weight": "bold"}}>
            The Speakeasy
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
