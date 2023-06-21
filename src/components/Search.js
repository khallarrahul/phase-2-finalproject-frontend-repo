import React from "react";
import "./Search.css";

function Search({ mapper, search, setSearch, handleFilter }) {
  const uniqueGenres = [...new Set(mapper)];

  function handleSearch(e) {
    const selectedGenre = e.target.value;
    setSearch(selectedGenre);
    handleFilter(selectedGenre);
  }

  return (
    <div className="search">
      <div className="search-text">Choose Event Category or Just scroll down to see all events</div>
      <div className="search-dropdown">
        <select className="search-select" onChange={handleSearch} value={search}>
          <option value="">All Categories</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Search;
