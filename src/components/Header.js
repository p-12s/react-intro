import React from "react"
import ReactDOM from "react-dom"
import './Header.css';

function Header() {
    return (
        <header className="navbar">This is the header</header>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
);

export default Header;