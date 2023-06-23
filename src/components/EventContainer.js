import React from "react";
import "./EventContainer.css";
import EventCard from "./EventCard";

function EventContainer({ events }) {
  const eventMapper = events.map((event) => <EventCard event={event} key={event.id} />);

  return (
    <div className="event-container">
      <h1 className="title">Events</h1>
      <div className="event">{eventMapper}</div>
    </div>
  );
}

export default EventContainer;
