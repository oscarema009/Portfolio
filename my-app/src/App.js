import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing';
import About from './views/About';
import Navbar from "./components/Navbar";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Projects />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
