import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import EventContainer from "./EventContainer";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=8BqmAHsITxNV1cgQOu0fann2QF0c8oX3")
      .then((res) => res.json())
      .then((data) => {
        const attractions = data._embedded.attractions;
        setEvents(attractions);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <Search />
      <EventContainer events={events} />
    </div>
  );
}

export default App;
