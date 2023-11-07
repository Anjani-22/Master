import "./styles.css";

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="App">
              <a href="/">Home</a>
            </li>
            <li className="App">
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<Home />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
