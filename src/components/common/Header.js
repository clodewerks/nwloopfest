import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/site.css"
import logo from "../../images/loopfest.jpg"

function Header() {
  const activeStyle = { color: "#ccc" };
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <img className="navbar-brand" src={logo} alt="NW Loopfest"/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeStyle={activeStyle} to="/fests">
        Previous Years 
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeStyle={activeStyle} to="/artists">
        Artists
      </NavLink>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Header;
