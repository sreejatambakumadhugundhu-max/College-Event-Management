import React from 'react';

function Home() {
return (
<div className="home-page" id="home">
<section className="hero">
<h1>Welcome to College Event Management</h1>
<p>
Discover college events, participate in activities,
and create unforgettable memories.
</p>
<a href="/events" className="hero-button">
Explore Events
</a>
</section>

  <section className="about-section" id="about">
    <h2>About Our Platform</h2>
    <p>
      Our platform helps students explore upcoming college events,
      register for activities, and manage their registrations easily.
    </p>
  </section>
</div>

);
}

export default Home;
