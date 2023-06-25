import React, { useState } from "react";
import "./PersonalEventCard.css";

function PersonalEventCard({ personalEvent }) {
  const [attendee, setAttendee] = useState(personalEvent.attendee);

  const updateAttendee = (newAttendee) => {
    fetch(`https://json-backend-y0k5.onrender.com/cardLikes&Comments/${personalEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee: newAttendee,
      }),
    })
      .then((res) => res.json())
      .then((data) => setAttendee(data.attendee));
  };

  const handleClick = (value) => {
    const newAttendee = attendee + value;
    if (newAttendee >= 0) {
      updateAttendee(newAttendee);
    }
  };

  return (
    <main>
      <div className="personalEventCard">
        <h1>{personalEvent.name}</h1>
        <h3>{personalEvent.type}</h3>
        <h3>{personalEvent.venue}</h3>
        <h3>{personalEvent.date}</h3>
        <h3>{personalEvent.time}</h3>
        <button onClick={() => handleClick(1)}>I AM GOING</button>
        <button onClick={() => handleClick(-1)}>I AM NOT GOING</button>
        <h3>Attendance: {attendee}</h3>
      </div>
    </main>
  );
}

export default PersonalEventCard;
