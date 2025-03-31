import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';

const App = () => {
  return (
    <Router>
      <div className="relative w-full h-full">
        <StarsCanvas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
