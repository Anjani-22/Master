import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dateStr = date.toDateString();
  console.log(dateStr);

  return (
    <div>
      <div>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>
      <h2>
        {count === 0
          ? "Today is : "
          : count > 0
          ? `${count} days from now `
          : `${count} days ago was `}
        {dateStr}
      </h2>
    </div>
  );
}

export default DateCounter;
