import React, { useState } from "react";
import "./PersonalEventCard.css";

function PersonalEventCard({ personalEvent }) {
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

  return (
    <main>
      <div className="personalEventCard">
        <h1>{personalEvent.name}</h1>
        <h3>{personalEvent.type}</h3>
        <h3>{personalEvent.venue}</h3>
        <h3>{personalEvent.date}</h3>
        <h3>{personalEvent.time}</h3>
        <button onClick={addAttendee}>I AM GOING</button>
        <button onClick={subtractAttendee}>I AM NOT GOING</button>
        <h3>Attendance: {attendee}</h3>
      </div>
    </main>
  );
}

export default PersonalEventCard;
