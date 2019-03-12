import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*

Что плохого в описании компонентов с использованием механизма классов?
Дело в том, что такие компоненты тяжело тестировать
и они имеют свойство чрезмерно разрастаться.
Эти компоненты подвержены проблеме некачественного разделения ответственности,
смешиванию логики и визуального представления
(а это усложняет отладку и тестирование приложений).
В целом, использование классов компонентов ведёт к тому, что программист,
фигурально выражаясь, «стреляет себе в ногу».
Поэтому, особенно если речь идёт о начинающих программистах,
я порекомендовал бы им совсем не пользоваться классами компонентов.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

const App = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);

export default App;
