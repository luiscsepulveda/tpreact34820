/* import logo from './logo.svg';
import './App.css';

function App() {
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

export default App; */


import React from 'react'
import './App.css';
import Logo from './components/Logo/logo';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo/>
        <Navbar/>
      </header>

      <body>
        <ItemListContainer className="homeTitle" greeting='Welcome to STAND T-shirts'/>
      </body>
    </div>
  

  );
}

export default App;

