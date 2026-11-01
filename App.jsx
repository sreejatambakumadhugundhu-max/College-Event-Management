import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Registration from './pages/Registration.jsx';
import MyEvents from './pages/MyEvents.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Login from './pages/Login.jsx';
import './App.css';

function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/events" element={<Events />} />
<Route path="/registration" element={<Registration />} />
<Route path="/my-events" element={<MyEvents />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
);
}

export default App;
