import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header>

            <h1 class="life-savers-bold">Nicki Barrett</h1>
            <nav >
                <ul class="list">
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;