import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import './App.css';
import Home from './pages/Home'
import Example1 from './pages/Example1';
import Example2 from './pages/Example2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
      </Routes>
    </Router>
  );
};


export default App;