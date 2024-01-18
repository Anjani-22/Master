import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dateStr = date.toDateString();
  console.log(dateStr);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <span>Step : {step}</span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
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
      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>reset</button>
      ) : null}
    </div>
  );
}

export default DateCounter;
