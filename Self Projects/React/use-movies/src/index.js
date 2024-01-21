import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [rating, setrating] = useState(0);
  return (
    <div>
      <StarRating onSetRate={setrating} />
      <p>this star has {rating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      msgs={["t", "b", "ok", "g", "amaz"]}
      defaultRating={3}
    />
    <StarRating maxRating={7} size={24} color="red" className="test" />
    <Test />
  </React.StrictMode>
);
