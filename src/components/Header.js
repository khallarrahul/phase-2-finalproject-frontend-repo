import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">The EventMaster</h1>
        <p className="header-quote">Your next Event Planning and Organizing Platform</p>
      </div>
      {/* <div className="header-right">
        <img
          src="https://images.unsplash.com/photo-1572731128205-2f901976a42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
          alt="people gathering"
          className="header-img"
        />
      </div> */}
    </div>
  );
}

export default Header;
