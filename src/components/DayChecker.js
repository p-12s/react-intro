import React from "react"

/*function DayChecker() {
    const date = new Date()
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    };

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}*/

// если некоему компоненту нужно работать с состоянием, то это должен быть компонент, основанный на классе
class DayChecker extends React.Component {
    constructor() {
        super()

        this.state = { // чтобы оснастить компонент состоянием, нужно в конструкторе добавить свойство state
            answer: "Of course"
        }
    }

    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay}. Are you fine? {this.state.answer}</h1>
        )
    }
}


export default DayChecker;