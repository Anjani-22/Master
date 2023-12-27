import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

function Header() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  const [showNavItem, setShowNavItem] = useState(false);

  function handleDarkMode() {
    document.documentElement.classList.toggle("fake-dark-mode");
    setIsFakeDark((isFakeDark) => !isFakeDark);
  }

  function handleToggle() {
    setShowNavItem((prev) => !prev);
  }

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link className="navbar-logo" to="/">
            My Portfolio
          </Link>
          <button onClick={handleDarkMode} className="btn-fake-dark-mode">
            {isFakeDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {!window.innerWidth <= 768 ? (
          <NavBar />
        ) : (
          <div>
            <ToggleButton handleOnClick={handleToggle} />
            {showNavItem && <NavBar />}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
