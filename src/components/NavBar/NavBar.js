import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/prices">Prices</Link>
            <Link to="/rooms">Rooms</Link>
            {/* Add other links as needed */}
        </nav>
    );
}

export default NavBar;

