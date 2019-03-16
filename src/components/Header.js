import React from "react"
import './Header.css';
import DayChecker from './DayChecker';

function Header() {
    return (
        <header className="navbar">
            <DayChecker/>
        </header>
    )
}

export default Header;