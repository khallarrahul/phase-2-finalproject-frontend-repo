import React, { useState } from "react";
import "./PersonalEventCard.css";

function PersonalEventCard({ personalEvent, deletePersonalEvent }) {
  const [attendee, setAttendee] = useState(personalEvent.attendee);

  const addAttendee = () => {
    fetch(`https://json-server-o66d.onrender.com/personalEvents/${personalEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee: attendee + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => setAttendee(parseInt(data.attendee)));
  };

  const subtractAttendee = () => {
    fetch(`https://json-server-o66d.onrender.com/personalEvents/${personalEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee: attendee - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => setAttendee(parseInt(data.attendee)));
  };

  const deleteCard = () => {
    fetch(`https://json-server-o66d.onrender.com/personalEvents/${personalEvent.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        deletePersonalEvent(personalEvent.id); // Call the deletePersonalEvent function
      });
  };

  return (
    <main>
      <div className="personalEventCard">
        <h1>{personalEvent.name}</h1>
        <img className="image" src={personalEvent.img} alt={personalEvent.name} />
        <h3>Type: {personalEvent.type}</h3>
        <h3>Venue: {personalEvent.venue}</h3>
        <h3>Date: {personalEvent.date}</h3>
        <br></br>
        <div style={{ display: "flex" }}>
          <button onClick={addAttendee}>I AM GOING</button>
          <button onClick={subtractAttendee}>I AM NOT GOING</button>
        </div>
        <h3>Attendance: {attendee}</h3>
        <button onClick={deleteCard}>Delete</button>
      </div>
    </main>
  );
}

export default PersonalEventCard;
