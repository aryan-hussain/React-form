import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Log Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;