import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import floralData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <FallingFlower />
      <Footer />
    </div>
  );
}
function FallingFlower() {
  return (
    <>
      <div class="falling-flower left"></div>
      <div class="falling-flower right"></div>
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Floral Creativity Land </h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const open = 12;
  const closeHour = 23;
  const isOpen = hour >= open && hour < closeHour;

  // if (isOpen) alert("Open");
  // else alert("close");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          {" "}
          We are currently close. Please visit between {open}:00 to {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00 . Please visit us or order Online</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Orchid Cards</h2>
      {floralData.length > 0 ? (
        // <React.Fragment key="fdfdf"> for List
        <>
          <p>
            Unleash your creative mind into land of floral art, that immediately
            connects you with beauty of nature
          </p>
          <ul className="florals">
            {floralData.map((floral) => (
              <Floral floralObj={floral} key={floral.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our cards</p>
      )}
    </main>
  );
}

function Floral({ floralObj }) {
  //if (floralObj.soldOut) return null;
  //console.log(test);
  return (
    <li className={`floral ${floralObj.soldOut ? "sold-out" : ""} `}>
      <img src={floralObj.photoName} alt={floralObj.name} />
      <div>
        <h3>{floralObj.name}</h3>
        <p>{floralObj.flowersUsed} </p>
        <span>{floralObj.soldOut ? "Sold Out" : floralObj.price}</span>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
