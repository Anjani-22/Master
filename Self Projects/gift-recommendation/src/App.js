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
      // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
      // const apiKey = "YOUR_OPENAI_API_KEY";
      // const apiUrl =
      //   "https://api.openai.com/v1/engines/davinci-codex/completions"; // Use the correct OpenAI API endpoint

      // // Prepare the prompt based on user preferences
      // const prompt = `Gift ideas for a ${userPreferences.age}-year-old ${userPreferences.gender} interested in ${userPreferences.interests}.`;

      // // Make a request to the OpenAI API
      // const response = await axios.post(
      //   apiUrl,
      //   {
      //     prompt,
      //     max_tokens: 50, // Adjust max_tokens based on the desired response length
      //     n: 1, // Number of completions to generate
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${apiKey}`,
      //     },
      //   }
      // );

      // // Extract the recommendation from the OpenAI API response
      // const recommendation = response.data.choices[0]?.text;

      // // Update the state with the recommendation
      const key = process.env.REACT_APP_OPENAPI_KEY;
      const openai = new OpenAI({ apiKey: key });

      const prompt = `List recommended gift items based age: ${age}, gender: ${gender}, interests: ${interests}, minPrice: ${minPrice}, maxPrice: ${maxPrice}, currency: ${currency} `;

      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      console.log(completion.choices[0]);
      const recommendation = completion.choices[0];
      setRecommendations([recommendation]);
    } catch (error) {
      // Handle errors appropriately, e.g., display an error message
      console.error("Error fetching gift recommendations:", error.message);
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
