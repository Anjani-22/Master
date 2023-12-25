import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";
import PageLayout from "./Pages/PageLayout";

function App() {
  return (
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
  );
}

export default App;
