import { useState } from "react";

export default function StepCounter() {
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
    <div className="parent">
      <button className="close" onClick={() => setOpen(!open)}>
        &times;
      </button>
      {open && (
        <div className="card">
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
              <Button bg="#7950f2" color="#fff">
                <span>👈</span> Previuos
              </Button>
              <Button bg="#7950f2" color="#fff">
                Next
                <span>👉</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ bg, color, onClick, children }) {
  return (
    <button style={{ backgroundColor: bg, color: color }} onClick={onClick}>
      {children}
    </button>
  );
}
