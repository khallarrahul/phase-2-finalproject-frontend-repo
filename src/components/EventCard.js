import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  console.log(event);
  return <div>{event.name}</div>;
}

export default EventCard;
