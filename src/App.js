import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Project from './Components/Project.jsx/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route index element={<Homepage/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
    
    
    </Routes>
    </Router>
    </div>
  );
}

export default App;
