import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fa fa-home"></i>Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/articles">
          <span>
            <i className="far fa-copy"></i>Articles
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <i className="far fa-user"></i>About
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
