import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  function handleDarkMode() {
    document.documentElement.classList.toggle("fake-dark-mode");
    setIsFakeDark((isFakeDark) => !isFakeDark);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/">
          My Portfolio
        </Link>
        <button onClick={handleDarkMode} className="btn-fake-dark-mode">
          {isFakeDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
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
