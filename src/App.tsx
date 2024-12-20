import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Projects from "./pages/Projects";
import Social from "./pages/Social";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
};

export default App;
