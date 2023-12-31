import React from "react";
import FormContainer from "./FormContainer";
import PersonalEventCard from "./PersonalEventCard";
import "./PersonalEventContainer.css";

function PersonalEventContainer({ personalEvents, handleFormSubmit, deletePersonalEvent }) {
  return (
    <div className="personal-event">
      <h1 className="title">Personal Events</h1>
      <FormContainer handleFormSubmit={handleFormSubmit} />
      <div className="personal-event-cards">
        {personalEvents.map((personalEvent) => (
          <PersonalEventCard
            personalEvent={personalEvent}
            key={personalEvent.id}
            deletePersonalEvent={deletePersonalEvent}
          />
        ))}
      </div>
    </div>
  );
}

export default PersonalEventContainer;
