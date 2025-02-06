import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <h1>Tuupakan Autopesu</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className='naav'>
          <Link to="/home" onClick={toggleMenu}><p>Home</p></Link>
        </div>
        <div className='naav'>
          <Link to="/Services" onClick={toggleMenu}><p>Services</p></Link>
        </div>
        <div className='naav'>
          <Link to="/contact" onClick={toggleMenu}><p>About</p></Link>
        </div>
        <div className='naav'>
          <Link to="/booking" onClick={toggleMenu}><p>Booking</p></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
