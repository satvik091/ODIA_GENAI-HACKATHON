import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Interview from './pages/Interview';
import Schemes from './pages/Schemes';
import './App.css';

const App = () => (
  <>
    <nav>
      <Link to="/">🏠 Home</Link>
      <Link to="/resume">📄 Resume Builder</Link>
      <Link to="/interview">🎤 Mock Interview</Link>
      <Link to="/schemes">📚 Govt Schemes</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/schemes" element={<Schemes />} />
    </Routes>
  </>
);

export default App;
