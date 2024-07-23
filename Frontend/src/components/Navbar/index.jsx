import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/create" className="nav-link">Create Recipe</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
