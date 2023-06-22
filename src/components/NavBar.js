import React from "react";
import "./NavBar.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
