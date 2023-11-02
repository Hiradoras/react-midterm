import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




const App = () => {
  const [input, setInput] = useState('');

  const handleMessageChange = event => {
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
          onChange={handleMessageChange}
          rows={4}
          cols={40}></textarea>
        </label>
      </div>
      <div>
        <label>Output:
          <textarea
          id="output"
          name="OutputText"
          rows={4}
          cols={40}></textarea>
        </label>
      </div>
      {/* <label htmlFor="message">My Textarea</label>
      <textarea
        id="message"
        name="message"
        value={input}
        onChange={handleMessageChange}
      /> */}

      <hr />

      <button disabled={!input}>CLICK</button>
    </div>
  );
};

// function App() {
//   const [input, setMessage] = useState('');

//   const handleMessageChange = event => {
//     // 👇️ access textarea value
//     setMessage(event.target.value);
//     console.log(event.target.value);
//   };
  
//   return (
//     <div className="App">
//       <div>
//       <header className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       const [message, setMessage] = useState('initial');
//       <label>Input:
//         <textarea 
//         id = "input"
//         name="inputText"
//         value={input}
//         onChange={handleMessageChange}

//         rows = {4} cols= {40} />
//       </label>
//       <label>Output:
//         <textarea id='transformed-text' name="outputText" rows = {4} cols= {40} />
//       </label>
//       </div>
//       <div>
//       <button  onClick={() => {
        
//         alert('clicked');
//         }}>
//           Click</button>
//           </div>
//           </div>
//   );
// }

export default App;
