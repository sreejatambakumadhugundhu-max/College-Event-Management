import React from 'react';

function AdminDashboard() {
  const events = [
    {
      id: 1,
      title: 'Technical Fest',
      date: '15 November 2026',
      category: 'Technical'
    },
    {
      id: 2,
      title: 'Cultural Fest',
      date: '20 November 2026',
      category: 'Cultural'
    },
    {
      id: 3,
      title: 'Sports Meet',
      date: '25 November 2026',
      category: 'Sports'
    }
  ];

  const registrations = JSON.parse(
    localStorage.getItem('registeredEvents') || '[]'
  );

  return (
    <section className="events-section">
      <h2>Admin Dashboard</h2>
      <p className="section-description">
        Overview of college events and registrations.
      </p>

      <div className="event-container">
        <div className="event-card">
          <div className="event-details">
            <h3>Total Events</h3>
            <h2>{events.length}</h2>
          </div>
        </div>

        <div className="event-card">
          <div className="event-details">
            <h3>Total Registrations</h3>
            <h2>{registrations.length}</h2>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: '30px' }}>Available Events</h3>

      <div className="event-container">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.category}</p>
              <p>📅 {event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminDashboard;
