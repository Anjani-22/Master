import React from "react";

import Footer from "../components/Footer";
import Main from "../components/Main";
// Correct import statement
import Header from "../components/Header";

function PageLayout() {
  return (
    <div>
      <Header />
      <Main />

      <Footer />
    </div>
  );
}

export default PageLayout;
