import React, { useState } from 'react';
import { getRegisteredEvents } from '../utils/storage.js';

function AdminDashboard() {
const [registrations, setRegistrations] = useState(
() => getRegisteredEvents()
);

const refreshRegistrations = () => {
setRegistrations(getRegisteredEvents());
};

const clearRegistrations = () => {
if (window.confirm('Delete all registrations?')) {
localStorage.removeItem('registeredEvents');
setRegistrations([]);
}
};

return (
<div className="events-section">
<h1>Admin Dashboard</h1>
<p>Manage and view student event registrations.</p>

  <div className="event-card">
    <h3>Total Registrations: {registrations.length}</h3>
    <button className="register-button" onClick={refreshRegistrations}>
      Refresh
    </button>
    {' '}
    <button className="register-button" onClick={clearRegistrations}>
      Clear Registrations
    </button>
  </div>

  {registrations.length === 0 ? (
    <p className="empty-message">No registrations found.</p>
  ) : (
    <div className="events-container">
      {registrations.map((item, index) => (
        <div className="event-card" key={item.id || index}>
          <h3>{item.event || item.title}</h3>
          <p>Name: {item.name || 'Not provided'}</p>
          <p>Email: {item.email || 'Not provided'}</p>
          <p>Roll Number: {item.rollNumber || 'Not provided'}</p>
        </div>
      ))}
    </div>
  )}
</div>

);
}

export default AdminDashboard;
