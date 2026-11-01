import React, { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();

alert('Login demo submitted successfully!');
setEmail('');
setPassword('');

};

return (
<div className="registration-section">
<h1>Student Login</h1>
<p>Enter your details to continue.</p>

  <form className="registration-form" onSubmit={handleSubmit}>
    <label>Email Address</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      required
    />

    <label>Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      required
    />

    <button type="submit">Login</button>
  </form>

  <p className="empty-message">
    Note: This is a demo login form; it does not verify accounts.
  </p>
</div>

);
}

export default Login;
