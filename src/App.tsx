import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './views/Sidebar/index'
import Dashboard from './views/Dashboard'
import { Routes }                  from './views/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
