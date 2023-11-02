import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App = () => {  
  const [input, setInput] = useState('');
  const handleInputChange = event => {
    // 👇️ access textarea value
    setInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className='App'>
      <div>
        <header
          className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div>
        <label>Input:
          <textarea
          id="input"
          name="inputText"
          value={input}
          onChange={handleInputChange}
          rows={4}
          cols={40}></textarea>
        </label>
      </div>
      <div >
        <label className='App'>Output:
          <textarea
          id="output"
          name="OutputText"
          value={input}
          onChange={handleInputChange}
          rows={4}
          cols={40}>
          </textarea>
        </label>
      </div>
      <hr />
    </div>
  );
};

export default App;
