import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import EventContainer from "./EventContainer";
import PersonalEventContainer from "./PersonalEventContainer";
import { Route, Switch, Link } from "react-router-dom";
import Contact from "./Contact";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [personalEvents, setPersonalEvents] = useState([]);
  const [filteredPersonalEvents, setFilteredPersonalEvents] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState("event");

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
    fetch("https://json-server-o66d.onrender.com/personalEvents")
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

  const handleFormSubmit = (newEvent) => {
    setPersonalEvents((prevEvents) => [...prevEvents, newEvent]);
    setFilteredPersonalEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const deletePersonalEvent = (eventId) => {
    setFilteredPersonalEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  return (
    <div className="app">
      <NavBar />
      <Route path="/contact">
        <Contact />
      </Route>
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
      <nav className="container-titles">
        <Link exact to="/" onClick={() => setSelectedContainer("event")}>
          <h3>Events</h3>
        </Link>
        <span className="separator"></span>
        <Link exact to="/personalevents" onClick={() => setSelectedContainer("personal")}>
          <h3>Personal Events</h3>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <EventContainer events={filteredEvents} />
        </Route>
        <Route path="/personalevents">
          <PersonalEventContainer
            personalEvents={filteredPersonalEvents}
            setPersonalEvents={setPersonalEvents}
            handlePersonalFilter={handlePersonalFilter}
            handleFormSubmit={handleFormSubmit}
            deletePersonalEvent={deletePersonalEvent} // Pass the function as a prop
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
