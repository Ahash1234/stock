import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📊 StockMaster Pro</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculate">Calculate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
