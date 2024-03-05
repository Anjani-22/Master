import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";
import PageLayout from "./Pages/PageLayout";
import "./style.css";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  function handleDarkEfect() {
    setIsFakeDark((isFakeDark) => !isFakeDark);
    document.documentElement.classList.toggle("fake-dark-mode");
  }

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
            <Route />
          </Route>
        </Routes>
      </HashRouter>
      <button onClick={handleDarkEfect} className="btn-fake-dark-mode">
        {isFakeDark ? "☀️" : "🌙"}
      </button>
    </>
  );
}

export default App;
