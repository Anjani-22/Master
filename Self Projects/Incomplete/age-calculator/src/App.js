import React, { useState } from "react";

import Age from "./Age";
import ImageUploader from "./ImageUploader";

function App() {
  const [birthdate, setbirthdate] = useState("");
  const [birthtime, setbirthtime] = useState("");
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [filePath, setfilePath] = useState("./ab.jpg");

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
    if (
      name.length === 0 ||
      profession.length === 0 ||
      birthdate.length === 0 ||
      birthtime.length === 0
    ) {
      alert("Fill all the fields, *asterisk marked inputs are mandatory");
    }

    if (ageDifference <= 0) {
      alert("Enter valid date from past");
      setbirthtime("");
      setbirthdate("");
    } else {
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
    // document.querySelector(".your-class-name").classList.add("selected-image");
  };

  const handleReset = () => {
    // Reset the state for a new calculation
    setbirthtime("");
    setbirthdate("");
    setAge(null);
    setName("");
    setProfession("");
    setfilePath("./ab.jpg");
  };

  return (
    <>
      <div className="heading">
        <h2> Calculate your age in Vijay Dinnanath Style😛</h2>
      </div>
      <div className="container">
        <div className="input-container">
          <label className="req">
            Enter your full name:
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="req">
            Enter your profession:
            <input
              className="input-field"
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </label>

          <label className="req">
            Enter your birthdate:
            <input
              className="input-field"
              type="date"
              value={birthdate}
              onChange={(e) => setbirthdate(e.target.value)}
              required
            />
          </label>
          <label className="req">
            Enter your birthdate:
            <input
              className="input-field"
              type="time"
              value={birthtime}
              onChange={(e) => setbirthtime(e.target.value)}
              required
            />
          </label>
          <label>
            Enter your image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setfilePath(e.target.files[0])}
            />
          </label>

          <button onClick={calculateAge} className="btn calculate">
            Calculate Age
          </button>

          <button onClick={handleReset} className="btn reset">
            Reset
          </button>
        </div>
        <div className="output">
          <ImageUploader file={filePath} />
          <Age age={age} name={name} profession={profession} />
        </div>
      </div>
    </>
  );
}

export default App;
