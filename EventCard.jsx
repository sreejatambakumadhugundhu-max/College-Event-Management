import React from 'react';

function EventCard({ event, onRegister }) {
  return (
    <div className="event-card">
      <div className="event-icon">{event.icon}</div>

      <div className="event-details">
        <span className="event-category">{event.category}</span>

        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p className="event-date">📅 {event.date}</p>

        <button
          className="register-button"
          onClick={() => onRegister(event)}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;
