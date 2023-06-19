import React from "react";
import "./NavBar.css"; // Import CSS file for styling

function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-link">
        Home
      </a>
      <a href="/contact" className="nav-link">
        Contact
      </a>
      <a href="/about" className="nav-link">
        About
      </a>
    </nav>
  );
}

export default NavBar;
