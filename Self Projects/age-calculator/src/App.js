import React, { useState } from "react";

import Age from "./Age";
import ImageUploader from "./ImageUploader";

function App() {
  const [birthdate, setbirthdate] = useState("");
  const [birthtime, setbirthtime] = useState("");
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  const calculateAge = () => {
    const dateArr = birthdate.split("-").map(Number);
    console.log(dateArr);
    const timeArr = birthtime.split(":").map(Number);
    console.log(timeArr);

    const dateObj = new Date();
    const currHour = dateObj.getHours();
    const currMin = dateObj.getMinutes();
    const currYear = dateObj.getFullYear();
    const currMonth = dateObj.getMonth() + 1;
    const currDate = dateObj.getDate();

    const now = new Date(currYear, currMonth, currDate, currHour, currMin);
    const bday = new Date(
      dateArr[0],
      dateArr[1],
      dateArr[2],
      timeArr[0],
      timeArr[1]
    );

    const ageDifference = now - bday;
    if (ageDifference < 0) alert("Enter valid date from past");
    else {
      const years = Math.floor(ageDifference / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor(
        (ageDifference % (365.25 * 24 * 60 * 60 * 1000)) /
          (30.44 * 24 * 60 * 60 * 1000)
      );
      const days = Math.floor(
        (ageDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );
      const hours = Math.floor(
        (ageDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor(
        (ageDifference % (60 * 60 * 1000)) / (60 * 1000)
      );

      setAge({
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
      });
    }
  };

  const handleReset = () => {
    // Reset the state for a new calculation
    setbirthtime("");
    setbirthdate("");
    setAge(null);
  };

  return (
    <div className="input-container">
      <label>
        Enter your name:
        <input
          className="input-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Enter your profession:
        <input
          className="input-field"
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
      </label>

      <label>
        Enter your birthdate:
        <input
          className="input-field"
          type="date"
          value={birthdate}
          onChange={(e) => setbirthdate(e.target.value)}
          required
        />
      </label>
      <label>
        Enter your birthdate:
        <input
          className="input-field"
          type="time"
          value={birthtime}
          onChange={(e) => setbirthtime(e.target.value)}
          required
        />
      </label>
      <button onClick={calculateAge} className="calculator-button">
        Calculate Age
      </button>

      <button onClick={handleReset} className="calculator-button">
        Reset
      </button>
      <Age age={age} name={name} profession={profession} />
      <ImageUploader />
    </div>
  );
}

export default App;
