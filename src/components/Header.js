import React from "react"
import './Header.css';
import DayChecker from './DayChecker';
import Login from './Login/Login';

function Header() {
    return (
        <header className="navbar">
            <DayChecker/>
            <Login/>
        </header>
    )
}

export default Header;