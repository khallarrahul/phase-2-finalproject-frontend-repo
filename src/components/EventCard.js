import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  console.log(event.classifications);
  //const genreMapper = event.classifications.genre.map((gen) => gen.name);
  const genreName = event.classifications[0].genre.name;
  return (
    <div className="eventCard">
      <h1>{event.name}</h1>
      <h2>Type of Event: {genreName}</h2>
      <h2>Get your tickets here: {event.url}</h2>
    </div>
  );
}

export default EventCard;
