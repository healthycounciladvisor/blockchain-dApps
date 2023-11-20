import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-intro'>
          Sven's<code>Todo-List</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          By React
        </a>
      </header>
      <Todo />
    </div>
  );
}

export default App;
