import { useState } from "react";
import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";

function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <FlashCard />
      <button className="close" onClick={() => setOpen(!open)}>
        &times;
      </button>
      {open && (
        <div>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              {step} {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <DateCounter />
    </>
  );
}

export default App;
