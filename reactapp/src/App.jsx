import React from 'react';
import './App.css';
import Home from './component/home';
import Layout from './component/layout';
import About from './component/About';
import Service from './component/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
          <Route path='service'  element={<Service/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
