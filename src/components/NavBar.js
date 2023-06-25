import React from "react";
import "./NavBar.css"; // Import CSS file for styling
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;
