import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-laptop-code"></i>Projects
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
      {/* <li className="nav-item">
        <a
          className="nav-link"
          href="https://docs.google.com/document/d/1uCYPIO9Euj3gSLAdAstqRMtlskOlYUpp/edit?usp=sharing&ouid=113663976285024799121&rtpof=true&sd=true"
          target="_blank"
        >
          <i class="fa-solid fa-file"></i>Resume
        </a>
      </li> */}
    </ul>
  );
}

export default NavBar;
