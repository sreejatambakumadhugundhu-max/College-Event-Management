import React, { useState } from 'react';
import { getRegisteredEvents } from '../utils/storage.js';

function MyEvents() {
const [events, setEvents] = useState(() => getRegisteredEvents());

const handleClear = () => {
if (window.confirm('Are you sure you want to clear all registrations?')) {
localStorage.removeItem('registeredEvents');
setEvents([]);
}
};

return (
<div className="events-section">
<h1>My Registered Events</h1>
<p>Here you can view the events you have registered for.</p>

  {events.length === 0 ? (
    <p className="empty-message">
      No registrations yet. Visit the Events page to register!
    </p>
  ) : (
    <>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={event.id || index}>
            <h3>{event.event || event.title}</h3>
            <p>👤 Name: {event.name || 'Not provided'}</p>
            <p>📧 Email: {event.email || 'Not provided'}</p>
            <p>🎓 Roll Number: {event.rollNumber || 'Not provided'}</p>
            {event.registeredAt && (
              <p>📅 Registered: {event.registeredAt}</p>
            )}
          </div>
        ))}
      </div>

      <button className="register-button" onClick={handleClear}>
        Clear All Registrations
      </button>
    </>
  )}
</div>

);
}

export default MyEvents;
