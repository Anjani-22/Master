import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/">
          My Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavBar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
