import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
            <li><Link to="/services" className="text-white hover:text-gray-400">Services</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
