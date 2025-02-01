import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Tuupakan Autopesu</h1>
      </div>
      <div className='navbar'>
        <div className='naav'>
        <Link to="/home"><p>Home</p> </Link>
        </div>
        <div className='naav'>
          <Link to="/Services"><p>Services</p></Link>
        </div>
        <div className='naav'>
          <Link to="/contact"><p>About</p></Link>
        </div> 
        <div className='naav'>
          <Link to="/booking"><p>Booking</p></Link>
        </div>
        
        

      </div>
     
    </nav>
  );
};

export default Navbar;
