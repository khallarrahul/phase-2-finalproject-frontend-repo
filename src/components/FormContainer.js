import React, { useState } from "react";
import "./FormContainer.css";

function FormContainer({ handleFormSubmit }) {
  const [eventData, setEventData] = useState({
    name: "",
    venue: "",
    date: "",
    type: "",
    img: "",
    attendee: parseInt(""),
  });

  const postEvent = (e) => {
    e.preventDefault();
    fetch("https://json-server-o66d.onrender.com/personalEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventData.name,
        venue: eventData.venue,
        date: eventData.date,
        type: eventData.type,
        img: eventData.img,
        attendee: eventData.attendee,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleFormSubmit(data); // Pass the new event data to the parent component
        setEventData({
          name: "",
          venue: "",
          date: "",
          type: "",
          img: "",
          attendee: "",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-container">
        <h3>Create Your Own Event</h3>
        <form onSubmit={postEvent}>
          <input
            type="text"
            name="name"
            placeholder="Event name"
            className="form-input"
            title="Event Name"
            value={eventData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="venue"
            placeholder="Event venue"
            className="form-input"
            title="Event Venue"
            value={eventData.venue}
            onChange={handleChange}
          />
          <input type="date" name="date" value={eventData.date} onChange={handleChange} className="form-input" />
          <input
            type="text"
            name="type"
            placeholder="Event type"
            className="form-input"
            title="Event Type"
            value={eventData.type}
            onChange={handleChange}
          />

          <input
            type="text"
            name="img"
            placeholder="Enter image URL"
            className="form-input"
            title="Event Image"
            value={eventData.img}
            onChange={handleChange}
          />
          <input type="submit" name="submit" value="Create New Event" className="submit-btn" title="Create New Event" />
        </form>
      </div>
    </>
  );
}

export default FormContainer;
