import React, { useState } from "react";

import FormContainer from "./FormContainer";
import PersonalEventCard from "./PersonalEventCard";

function PersonalEventContainer({ personalEvents, setPersonalEvents }) {
  const [eventData, setEventData] = useState({
    name: "",
    venue: "",
    date: "",
    type: "",
    img: "",
  });

  const personalEventsMap = personalEvents.map((personalEvent) => (
    <PersonalEventCard personalEvent={personalEvent} key={personalEvent.id} />
  ));

  return (
    <>
      <div className="personal-event">
        <h1>Personal Events</h1>
      </div>
      <FormContainer eventData={eventData} setEventData={setEventData} setPersonalEvents={setPersonalEvents} />
      {personalEventsMap}
    </>
  );
}

export default PersonalEventContainer;
