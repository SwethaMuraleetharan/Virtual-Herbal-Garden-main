import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthWellnessPage from './HealthWellnessPage';
import HomePage from './HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HerbalQuiz from './pages/quiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-wellness" element={<HealthWellnessPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<HerbalQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
