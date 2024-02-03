import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PGNF from "./pages/PGNF";

function App() {
  //const x = 23;
  return (
    <div>
      <h1>above routes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<PGNF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
