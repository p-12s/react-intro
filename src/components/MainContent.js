import React from "react"
import ReactDOM from "react-dom"

function MainContent() {
    return (
        <main className="MainContent">
            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>
        </main>
    )
}

ReactDOM.render(
    <MainContent />,
    document.getElementById("root")
);

export default MainContent;