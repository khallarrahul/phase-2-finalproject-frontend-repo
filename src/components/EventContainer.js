import React from "react";
import "./EventContainer.css";
import EventCard from "./EventCard";

function EventContainer({ events }) {
  const eventMapper = events.map((event) => <EventCard event={event} key={event.id} />);

  return (
    <>
      <h1>Events</h1>
      <div className="event">{eventMapper}</div>
    </>
  );
}

export default EventContainer;
