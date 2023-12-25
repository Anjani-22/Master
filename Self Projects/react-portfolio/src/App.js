import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import "./styles/content.css";
import "./styles/layout.css";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
