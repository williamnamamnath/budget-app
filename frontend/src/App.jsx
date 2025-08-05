import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import Home from './pages/dashboard/Home';
import Income from './pages/dashboard/Income';
import Expenses from './pages/dashboard/Expenses';
import LandingPage from './pages/dashboard/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expenses" exact element={<Expenses />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;