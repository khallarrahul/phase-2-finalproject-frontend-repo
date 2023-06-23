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
  const [personalEvents, setPersonalEvents] = useState([]);
  const [filteredPersonalEvents, setFilteredPersonalEvents] = useState([]);

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
    if (selectedContainer === "event") {
      const filtered = events.filter(
        (event) =>
          selectedGenre === "" || event.classifications[0].genre.name.toLowerCase() === selectedGenre.toLowerCase()
      );
      setFilteredEvents(filtered);
    } else if (selectedContainer === "personal") {
      const filtered = personalEvents.filter(
        (event) => selectedGenre === "" || event.type.toLowerCase() === selectedGenre.toLowerCase()
      );
      setFilteredPersonalEvents(filtered);
    }
  };

  useEffect(() => {
    fetch("https://json-backend-y0k5.onrender.com/cardLikes&Comments")
      .then((res) => res.json())
      .then((data) => {
        setPersonalEvents(data);
        setFilteredPersonalEvents(data);
      });
  }, []);

  const handlePersonalFilter = (selectedGenre) => {
    const filtered = personalEvents.filter(
      (event) => selectedGenre === "" || event.type.toLowerCase() === selectedGenre.toLowerCase()
    );
    setFilteredPersonalEvents(filtered);
  };

  const [selectedContainer, setSelectedContainer] = useState("event");

  const handleFormSubmit = (newEvent) => {
    setPersonalEvents((prevEvents) => [...prevEvents, newEvent]);
    setFilteredPersonalEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
      <NavBar />
      <Header />
      <Search
        mapper={genreMapper}
        search={search}
        setSearch={setSearch}
        handleFilter={handleFilter}
        selectedContainer={selectedContainer}
        personalEvents={personalEvents}
        handlePersonalFilter={handlePersonalFilter}
      />
      <nav>
        <Link exact to="/eventcontainer" onClick={() => setSelectedContainer("event")}>
          Event Container
        </Link>
        <Link exact to="/personaleventcontainer" onClick={() => setSelectedContainer("personal")}>
          Personal Event Container
        </Link>
      </nav>
      <Switch>
        <Route path="/eventcontainer">
          <EventContainer events={filteredEvents} />
        </Route>
        <Route path="/personaleventcontainer">
          <PersonalEventContainer
            personalEvents={filteredPersonalEvents}
            setPersonalEvents={setPersonalEvents}
            handlePersonalFilter={handlePersonalFilter}
            handleFormSubmit={handleFormSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
