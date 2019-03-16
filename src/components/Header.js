import React from "react"
import ReactDOM from "react-dom"
import './Header.css';
import DayChecker from './DayChecker';

function Header() {
    return (
        <header className="navbar">
            <div>This is the header</div>
            <DayChecker/>
        </header>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
);

export default Header;