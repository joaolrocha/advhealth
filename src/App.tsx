import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

import './App.css'
import Schedule from './pages/Schedules/Schedules';
import Consultations from './pages/Consultations/Consultations';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/consultations" element={<Consultations />} />
      </Routes>
    </Router>
  );
};

export default App;
