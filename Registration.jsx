import React, { useState } from 'react';
import { registerEvent } from '../utils/storage.js';

function Registration() {
const [form, setForm] = useState({
name: '',
email: '',
rollNumber: '',
event: 'Technical Fest'
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();

registerEvent({
  ...form,
  id: Date.now(),
  registeredAt: new Date().toLocaleDateString()
});

alert('Registration successful!');

setForm({
  name: '',
  email: '',
  rollNumber: '',
  event: 'Technical Fest'
});

};

return (
<div className="registration-section">
<h1>Event Registration</h1>
<p>Fill in your details to register for an event.</p>

  <form className="registration-form" onSubmit={handleSubmit}>
    <label>Full Name</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Enter your full name"
      required
    />

    <label>Email Address</label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
    />

    <label>Roll Number</label>
    <input
      type="text"
      name="rollNumber"
      value={form.rollNumber}
      onChange={handleChange}
      placeholder="Enter your roll number"
      required
    />

    <label>Select Event</label>
    <select name="event" value={form.event} onChange={handleChange}>
      <option>Technical Fest</option>
      <option>Cultural Fest</option>
      <option>Sports Meet</option>
    </select>

    <button type="submit">Submit Registration</button>
  </form>
</div>

);
}

export default Registration;
