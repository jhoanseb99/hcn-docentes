import logo from './../logo.svg';
import './App.css';
import { Advertisements } from './pages/Advertisements';

function App() {
  /*
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
  );*/
  return (
    <>
    <div className="card bg-success">
    </div>
    <Advertisements/>
    </>
  );
}

export default App;