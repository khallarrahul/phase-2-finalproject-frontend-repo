import React, { useState } from "react";
import "./PersonalEventCard.css";

function PersonalEventCard({ personalEvent }) {
  const [attendee, setAttendee] = useState(personalEvent.attendee);
  const addAttendee = () => {
    fetch(`https://json-backend-y0k5.onrender.com/cardLikes&Comments/${personalEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee: attendee + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const subtractAttendee = () => {
    fetch(`https://json-backend-y0k5.onrender.com/cardLikes&Comments/${personalEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee: attendee - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  function handleClick2() {
    setAttendee(attendee - 1);
    subtractAttendee();
  }

  function handleClick() {
    setAttendee(attendee + 1);
    addAttendee();
  }

  return (
    <div className="personalEventCard">
      <h1>{personalEvent.name}</h1>
      <h3>{personalEvent.type}</h3>
      <h3>{personalEvent.venue}</h3>
      <h3>{personalEvent.date}</h3>
      <h3>{personalEvent.time}</h3>
      <button onClick={handleClick}>I AM GOING</button>
      <button onClick={handleClick2}>I AM NOT GOING</button>
      <h3>Attendance: {attendee}</h3>
    </div>
  );
}

export default PersonalEventCard;
