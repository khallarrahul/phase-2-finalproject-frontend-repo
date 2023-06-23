import React from "react";
import "./PersonalEventCard.css";

function PersonalEventCard({ personalEvent }) {
  return (
    <div className="personalEventCard">
      <h1>{personalEvent.name}</h1>
      <h3>{personalEvent.type}</h3>
      {/* <img src={personalEvent.img} alt={personalEvent.name} /> */}
      <h3>{personalEvent.venue}</h3>
      <h3>{personalEvent.date}</h3>
      <h3>{personalEvent.time}</h3>
    </div>
  );
}

export default PersonalEventCard;
