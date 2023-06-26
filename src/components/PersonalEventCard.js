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
    if (attendee > 0) {
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
    }
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
        <h2>Type: {personalEvent.type}</h2>
        <h2>Venue: {personalEvent.venue}</h2>
        <h2>Date: {personalEvent.date}</h2>
        <br></br>
        <div style={{ display: "flex" }}>
          <button className="btn" onClick={addAttendee}>
            I AM GOING
          </button>
          <button className="btn" onClick={subtractAttendee}>
            I AM NOT GOING
          </button>
        </div>
        <h2>Attendance: {attendee}</h2>
        <button className="btn" onClick={deleteCard}>
          Delete Event
        </button>
      </div>
    </main>
  );
}

export default PersonalEventCard;
