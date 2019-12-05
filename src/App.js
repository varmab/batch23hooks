import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Batch 23 Hooks</h1>
      </header>
      <Users/>
    </div>
  );
}

export default App;
