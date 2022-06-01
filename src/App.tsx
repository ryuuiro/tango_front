import React from 'react';
import Calculator from './views/Calculator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculate Fibonacci!
        </p>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
