import React from "react"
import ReactDOM from "react-dom"
import './Header.css';
import DayChecker from './DayChecker';

function Header() {
    return (
        <header className="navbar">
            <DayChecker/>
        </header>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
);

export default Header;