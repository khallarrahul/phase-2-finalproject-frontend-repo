import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import EventContainer from "./EventContainer";
import PersonalEventContainer from "./PersonalEventContainer";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch("https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=8BqmAHsITxNV1cgQOu0fann2QF0c8oX3")
      .then((res) => res.json())
      .then((data) => {
        const attractions = data._embedded.attractions;
        setEvents(attractions);
        setFilteredEvents(attractions);
      });
  }, []);

  const genreMapper = events.map((event) => event.classifications[0].genre.name);

  const handleFilter = (selectedGenre) => {
    const filtered = events.filter(
      (event) =>
        selectedGenre === "" || event.classifications[0].genre.name.toLowerCase() === selectedGenre.toLowerCase()
    );
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <NavBar />
      <Header />

      <Search search={search} setSearch={setSearch} mapper={genreMapper} handleFilter={handleFilter} />
      <nav>
        <Link exact to="/eventcontainer">
          Event Container
        </Link>
        <Link to="/personaleventcontainer">Personal Event Container</Link>
      </nav>
      <Switch>
        <Route path="/eventcontainer">
          <EventContainer events={filteredEvents} />
        </Route>
        <Route path="/personaleventcontainer">
          <PersonalEventContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
