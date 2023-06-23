import React from "react";
import FormContainer from "./FormContainer";
import PersonalEventCard from "./PersonalEventCard";

function PersonalEventContainer({ personalEvents, handleFormSubmit }) {
  const personalEventsMap = personalEvents.map((personalEvent) => (
    <PersonalEventCard personalEvent={personalEvent} key={personalEvent.id} />
  ));

  return (
    <>
      <div className="personal-event">
        <h1>Personal Events</h1>
      </div>
      <FormContainer handleFormSubmit={handleFormSubmit} />
      {personalEventsMap}
    </>
  );
}

export default PersonalEventContainer;
