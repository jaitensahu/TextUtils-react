import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h3>Text Utils</h3>
        <Link to="/"> Home</Link>
        <Link to="/about"> About Us</Link>
        <Link to="/contact"> Contact</Link>
      </div>
      <div className="right">
        <button>Dark</button>
        <p>Enable Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
