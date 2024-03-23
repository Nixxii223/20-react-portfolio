import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../../images/profile-pic.jpg';
import './header.css';

const Header = () => {
    return (
        <header>
            <div>
                <img src={profilePic} className="profile-pic" alt="Nicki Barrett" />
                <h1 className="life-savers-bold">Nicki Barrett</h1>
            </div>

            <nav className="poppins-regular">
                <ul>
                    <NavLink
                        to="/homepage"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#75C9C8" : "#e6aace",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#75C9C8" : "#e6aace",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/resume"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#75C9C8" : "#e6aace",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#75C9C8" : "#e6aace",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;