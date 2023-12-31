import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  const genreName = event.classifications[0].genre.name;
  const imagesWithUrl = event.images.filter((image) => image.url.includes("ARTIST_PAGE_3_2.jpg"));
  const imgUrl = imagesWithUrl[0].url;
  const segmentName = event.classifications[0].segment.name;
  const subGenreName = event.classifications[0].subGenre.name;

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(event.url).then(() => {
      alert("Copied to Clipboard");
    });
  };

  return (
    <main>
      <div className="eventCard">
        <h1>{event.name}</h1>
        <img src={imgUrl} alt={event.name} />
        <h2>Type of Event: {genreName}</h2>
        <h2>Segment: {segmentName}</h2>
        <h2>Sub-Genre: {subGenreName}</h2>
        <button className="btn" onClick={copyLinkToClipboard}>
          <btn className="text">COPY LINK FOR MORE INFO</btn>
        </button>
      </div>
    </main>
  );
}

export default EventCard;
