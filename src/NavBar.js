import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects-list">Projects</Link>
            </li>
            <li>
                <Link to="/education">Education</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;