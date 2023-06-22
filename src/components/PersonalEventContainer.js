import React, { useState } from "react";

import FormContainer from "./FormContainer";

function PersonalEventContainer() {
  const [eventData, setEventData] = useState({
    name: "",
    venue: "",
    date: "",
    type: "",
    img: "",
  });
  return (
    <>
      <div className="personal-event">
        <h1>Personal Events</h1>
      </div>
      <FormContainer eventData={eventData} setEventData={setEventData} />
    </>
  );
}

export default PersonalEventContainer;
