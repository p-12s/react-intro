import React from "react"
import ReactDOM from "react-dom"
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <h2>footer</h2>
        </footer>
    )
}

ReactDOM.render(
    <Footer />,
    document.getElementById("root")
);

export default Footer;