
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./cssStyles/App.css"

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Books" element={<Books />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
