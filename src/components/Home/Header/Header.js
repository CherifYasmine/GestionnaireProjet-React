import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <div className="menu-icon">
                <span className="fas fa-bars"></span>
            </div>
            <div className="logo">Clazana</div>
            <div className="nav-items">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li>
                <a className="dropdown">
                    <a href="/" class="dropbtn">Account</a>
                    <div className="dropdown-content">
                         <a href="/login">Login</a>
                         <a href="/register">Register</a>
                         <a href="/">Profile</a>
                         <a href="/">Logout</a>
                   </div>
                </a>
            </li>
            </div>
            <form>
            <input type="search" className="search-data" placeholder="Search..." required/>
            <button type="submit"><FontAwesome name="search"/></button>
            </form>
            

            </nav>
    );
};

export default Header;