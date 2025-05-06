import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pomodoro from './components/Pomodoro';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/pomodoro">Pomodoro Timer</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
