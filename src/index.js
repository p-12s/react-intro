import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MarkedList from './MarkedList';
import FunctionalComponent from './FunctionalComponent';
import MyInfo from './MyInfo';

//ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))
ReactDOM.render(
    <React.Fragment>
        <App/>
        <MarkedList/>
        <FunctionalComponent/>
        <MyInfo/>
    </React.Fragment>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


