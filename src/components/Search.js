import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search-text">Choose Event Category or Just scroll down to see all events</div>
      <div className="search-dropdown">
        <select className="search-select">
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="art">Art</option>
          <option value="food">Food</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
