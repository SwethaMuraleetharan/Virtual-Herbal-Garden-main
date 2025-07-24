import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthWellnessPage from './HealthWellnessPage';
import HomePage from './HomePage';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-wellness" element={<HealthWellnessPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
