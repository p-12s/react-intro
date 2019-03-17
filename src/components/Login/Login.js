import React from "react"

// если некоему компоненту нужно работать с состоянием, то это должен быть компонент, основанный на классе
class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let wordDisplay = this.state.isLoggedIn ? "in" : "out"

        return (
            <div>You are currently logged {wordDisplay}</div>
        )
    }
}


export default Login;