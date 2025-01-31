
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Contact from './components/contact';
import Booking from './components/booking';
import './assets/navbar.css'
import './assets/home.css'
import './assets/services.css'



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
