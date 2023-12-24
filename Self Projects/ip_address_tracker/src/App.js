import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/about" element={About}></Route>
        <Route path="/settings" element={Settings}></Route>
        <Route path="*" element={PageNotFound}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
