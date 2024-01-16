// App.js
import OpenAI from "openai";
import React, { useState } from "react";
import GiftForm from "./Components/GiftForm";
import GiftList from "./Components/GiftList";

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  const getGiftRecommendations = async ({
    age,
    gender,
    interests,
    minPrice,
    maxPrice,
    currency,
  }) => {
    try {
      const msg = `List recommended gift items based age: ${age}, gender: ${gender}, interests: ${interests}, minPrice: ${minPrice}, maxPrice: ${maxPrice}, currency: ${currency} `;

      const options = {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: msg,
        }),
      };

      const response = await fetch("http://localhost:8000/gift_rec", options);
      const data = await response.json();

      console.log(data);
      const recommendation = data.choices[0];
      setRecommendations(recommendation);
    } catch (error) {
      // Handle errors appropriately, e.g., display an error message
      console.error("👽 Error fetching gift recommendations:", error.message);
    }
  };

  return (
    <div>
      <h1>Gift Recommendation App</h1>

      <GiftForm onSubmit={getGiftRecommendations} />
      <GiftList recommendations={recommendations} />
    </div>
  );
};

export default App;
