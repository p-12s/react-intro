import React from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Jokes from './components/Jokes/Jokes'
import Products from './components/Products/Products'

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

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    // в версии React 16.3 УСТАРЕЛИ методы:
    // componentWillMount()
    // componentWillReceiveProps()
    // componentWillUpdate()

    componentDidMount() {
    // загрузить данные, необходимые для корректного отображения компонента
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
        // сделать тут что-то важное
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
    // вернуть true если компонент нуждается в обновлении
    // вернуть false в противном случае
    }

    componentWillUnmount() {
    // навести порядок после удаления компонента
    // (например - убрать прослушиватели событий)
    }

    // в версии React 16.3 ПОЯВИЛИСЬ методы:
    static getDerivedStateFromProps(props, state) {
    }

    getSnapshotBeforeUpdate() {
        // new comment dev
    }


    render() {
        return (
            <React.Fragment>
                <Header/>
                <MainContent/>
                <Footer/>
                <Jokes/>
                <Products/>
        </React.Fragment>
        )
    }
}

export default App;
