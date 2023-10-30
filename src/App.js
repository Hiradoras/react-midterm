import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <label>test:
        <textarea name="textContent" rows = {4} cols= {40} />
      </label>
    </div>
  );
}

export default App;
