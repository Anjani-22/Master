import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [dateStr, setdateStr] = useState("");

  const iterativeDate = () => {
    const skipCount = step * count;
    const obj = new Date();
    obj.setDate(obj.getDate() + skipCount);

    const date = obj.getDate();
    const month = obj.getMonth();
    const year = obj.getFullYear();

    const datestr = `${date} - ${month + 1} - ${year}`;
    setdateStr(datestr);
    console.log(date);
  };

  function handleCountPlus() {
    setCount(count + 1);
    iterativeDate();
  }
  function handleCountMinus() {
    setCount(count - 1);
    iterativeDate();
  }
  function handleStepPlus() {
    setStep(step + 1);
    iterativeDate();
  }
  function handleStepMinus() {
    setStep(step - 1);
    iterativeDate();
  }
  return (
    <div>
      <div>
        <button onClick={handleStepPlus}>+</button>
        <span>Step : {step}</span>
        <button onClick={handleStepMinus}>-</button>
      </div>
      <div>
        <button onClick={handleCountPlus}>+</button>
        <span>Count : {count}</span>
        <button onClick={handleCountMinus}>-</button>
      </div>
      <h2>{dateStr}</h2>
    </div>
  );
}

export default DateCounter;
