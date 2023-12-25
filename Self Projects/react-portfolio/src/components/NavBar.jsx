import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar-nav ml-auto">
      <div className="hori-selector">
        <div className="left"></div>
      </div>

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="far fa-copy"></i>Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <i className="far fa-clone"></i>About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          <i className="far fa-calendar-alt"></i>Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
