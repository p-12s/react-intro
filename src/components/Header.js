import React from "react"
import ReactDOM from "react-dom"
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h1>Header</h1>
        </header>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
);

export default Header;