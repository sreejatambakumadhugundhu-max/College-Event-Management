import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 College Events</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#about">About</a>
        <a href="#my-events">My Events</a>
      </div>
    </nav>
  );
}

export default Navbar;
