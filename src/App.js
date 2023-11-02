import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <label>Input:
        <textarea name="inputText" rows = {4} cols= {40} />
      </label>
      <label>Output:
        <textarea name="outputText" rows = {4} cols= {40} />
      </label>
    </div>
  );
}

export default App;
