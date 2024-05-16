// import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Chatbot from './components/Chatbot';
import Service from './components/pages/Service'


function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-500 bg-cover ">
      <Router>
      <div>
        <Navbar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
     
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
