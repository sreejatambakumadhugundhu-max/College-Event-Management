import React from 'react';

const events = [
{
id: 1,
title: 'Technical Fest',
category: 'Technical',
description: 'Showcase your technical skills through coding and technology competitions.',
date: 'November 15, 2026',
icon: '💻'
},
{
id: 2,
title: 'Cultural Fest',
category: 'Cultural',
description: 'Enjoy music, dance, cultural performances, and fun activities.',
date: 'November 20, 2026',
icon: '🎭'
},
{
id: 3,
title: 'Sports Meet',
category: 'Sports',
description: 'Participate in exciting indoor and outdoor sports competitions.',
date: 'November 25, 2026',
icon: '🏆'
}
];

function Events() {
return (
<div className="events-section" id="events">
<h1>Upcoming College Events</h1>
<p>Explore our events and choose your favourite activity!</p>

  <div className="events-container">
    {events.map((event) => (
      <div className="event-card" key={event.id}>
        <div className="event-icon">{event.icon}</div>
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>📅 {event.date}</p>
        <a href="/registration" className="register-button">
          Register Now
        </a>
      </div>
    ))}
  </div>
</div>

);
}

export default Events;
