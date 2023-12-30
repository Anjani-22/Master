import Projects from "./pages/Projects/Projects";
import PageLayout from "./pages/PageLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import "./styles/content.css";
import "./styles/layout.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Articles from "./pages/Article/Articles";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Projects />} />
          <Route path="/articles" element={<Articles />} />

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
