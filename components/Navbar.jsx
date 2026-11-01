import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar">
<h2>🎓 College Events</h2>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/events">Events</Link>
    <Link to="/registration">Register</Link>
    <Link to="/my-events">My Events</Link>
    <Link to="/admin">Admin</Link>
    <Link to="/login">Login</Link>
  </div>
</nav>

);
}

export default Navbar;
