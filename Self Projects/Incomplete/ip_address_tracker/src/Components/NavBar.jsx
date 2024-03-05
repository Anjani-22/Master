import React from "react";
import { Link } from "react-router-dom";

const navbar = { display: "flex", justifyContent: "flex-end" };

function NavBar() {
  return (
    <div>
      NavBar
      <ul className={navbar}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/settings"> settings </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
