import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header>

            <h1 class="life-savers-bold">Nicki Barrett</h1>
            <nav >
                <a>
                    <li><Link to="/homepage">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </a>
            </nav>
        </header>
    );
}

export default Header;