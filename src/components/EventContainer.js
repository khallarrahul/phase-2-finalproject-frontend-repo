import React from "react";
import "./EventContainer.css";
import EventCard from "./EventCard";

function EventContainer({ events }) {
  const eventMapper = events.map((event) => <EventCard event={event} key={event.id} />);

  return <div className="event-container">{eventMapper}</div>;
}

export default EventContainer;
