import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Chef!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A place to find great recipes
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=jPOxWOE-3Xk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eat Good!
        </a>
      </header>
    </div>
  );
}

export default App;
