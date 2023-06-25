import React from "react";
import "./Search.css";

function Search({ mapper, search, setSearch, handleFilter, selectedContainer, personalEvents, handlePersonalFilter }) {
  const uniqueGenres = [...new Set(mapper)];
  const personalEventTypes = [...new Set(personalEvents.map((event) => event.type))];

  function handleSearch(e) {
    const selectedGenre = e.target.value;
    setSearch(selectedGenre);

    if (selectedContainer === "event") {
      handleFilter(selectedGenre);
    } else if (selectedContainer === "personal") {
      handlePersonalFilter(selectedGenre);
    }
  }

  return (
    <div className="search">
      <div className="search-text">Choose Event Category</div>
      <div className="search-dropdown">
        <select className="search-select" onChange={handleSearch} value={search}>
          <option value="">All Categories</option>
          {selectedContainer === "event" &&
            uniqueGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          {selectedContainer === "personal" &&
            personalEventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Search;
