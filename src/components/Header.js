import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">The EventGuru</div>
      <div className="header-right">
        <img
          src="https://images.unsplash.com/photo-1597298184931-bf2a546401a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt="people gathering"
          className="header-img"
        />
      </div>
    </div>
  );
}

export default Header;
