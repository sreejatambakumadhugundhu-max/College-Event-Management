import React from 'react';

const eventsList = [
  {
    id: 1,
    title: 'Technical Fest',
    date: '15 November 2026',
    category: 'Technical',
    description: 'Participate in coding competitions and technical activities.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Cultural Fest',
    date: '20 November 2026',
    category: 'Cultural',
    description: 'Enjoy music, dance and cultural performances.',
    icon: '🎭'
  },
  {
    id: 3,
    title: 'Sports Meet',
    date: '25 November 2026',
    category: 'Sports',
    description: 'Show your talent in exciting sports competitions.',
    icon: '🏆'
  }
];

function Events() {
  return (
    <section className="events-section" id="events">
      <h2>Upcoming Events</h2>
      <p className="section-description">
        Explore and register for exciting college events.
      </p>

      <div className="event-container">
        {eventsList.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-icon">{event.icon}</div>

            <div className="event-details">
              <span className="event-category">{event.category}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="event-date">📅 {event.date}</p>
              <button className="register-button">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
