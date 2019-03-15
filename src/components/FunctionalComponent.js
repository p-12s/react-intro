import React from "react"
import ReactDOM from "react-dom"

function FunctionalComponent() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

ReactDOM.render(
    <FunctionalComponent />,
    document.getElementById("root")
);

export default FunctionalComponent;