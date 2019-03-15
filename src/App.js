import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

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

---------
Если в компоненте, созданном с использованием класса,
нет ничего кроме метода render,
то он является отличным претендентом на переработку его в функциональный компонент

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
    <React.Fragment>
        <Header/>
        <MainContent/>
        <Footer/>
    </React.Fragment>
);

export default App;
