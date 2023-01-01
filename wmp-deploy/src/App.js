import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Boondocking</h1>
      <ul className='nav-links'>
        <li><Link to='/gettingstarted'>Getting Started</Link></li>
      </ul>
    </div>
      <Routes>
        <Route path="/gettingstarted"></Route>
      </Routes>
    </Router>
  );
}

export default App;
