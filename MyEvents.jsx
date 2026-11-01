import React from 'react';

function MyEvents() {
  const registeredEvents = JSON.parse(
    localStorage.getItem('registeredEvents') || '[]'
  );

  return (
    <section className="my-events">
      <h2>My Registered Events</h2>

      {registeredEvents.length === 0 ? (
        <p>You have not registered for any events yet.</p>
      ) : (
        <div className="event-container">
          {registeredEvents.map((event, index) => (
            <div className="event-card" key={event.id || index}>
              <div className="event-details">
                <h3>{event.title || event.event}</h3>
                <p>{event.date || 'Date not available'}</p>
                <p>{event.category || 'College Event'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyEvents;
