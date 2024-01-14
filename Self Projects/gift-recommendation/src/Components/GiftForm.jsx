// GiftForm.js
import React, { useState } from "react";
import currencies from "./currency";

const GiftForm = ({ onSubmit }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("INR");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!age || !gender || !interests || !minPrice || !maxPrice) {
      // You can provide feedback to the user, e.g., display an error message
      alert("Please fill in all fields.");
      return;
    }

    // Call the onSubmit function with user preferences
    onSubmit({ age, gender, interests, minPrice, maxPrice });

    // Optionally, clear the form after submission
    setAge("");
    setGender("");
    setInterests("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />

      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add more gender options if needed */}
        </select>
      </label>
      <br />

      <label>
        Interests:
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </label>
      <br />

      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <br />

      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <br />

      <label>
        Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((currencyOption) => (
            <option key={currencyOption.code} value={currencyOption.code}>
              {currencyOption.name} ({currencyOption.code})
            </option>
          ))}
        </select>
      </label>
      <br />

      <button type="submit">Get Recommendations</button>
    </form>
  );
};

export default GiftForm;
