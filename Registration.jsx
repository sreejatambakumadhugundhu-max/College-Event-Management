import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    event: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email ||
        !formData.rollNumber || !formData.event) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Registration successful!');

    setFormData({
      name: '',
      email: '',
      rollNumber: '',
      event: ''
    });
  };

  return (
    <section className="registration-section">
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit} className="registration-form">
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Roll Number</label>
        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Enter your roll number"
        />

        <label>Select Event</label>
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
        >
          <option value="">Choose an event</option>
          <option value="Technical Fest">Technical Fest</option>
          <option value="Cultural Fest">Cultural Fest</option>
          <option value="Sports Meet">Sports Meet</option>
        </select>

        <button type="submit" className="register-button">
          Submit Registration
        </button>
      </form>
    </section>
  );
}

export default Registration;
