import React from "react"
import ReactDOM from "react-dom"

function DayChecker() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(
    <DayChecker />,
    document.getElementById("root")
);

export default DayChecker;