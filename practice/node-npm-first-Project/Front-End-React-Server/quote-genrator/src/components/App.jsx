import React, { useState, useEffect } from "react";
//import quotes from "../quotes";
import MusicGIF from "./MusicSymbol";
import QuoteHeading from "./QuoteHeading";
import Quote from "./Quote";
import AllQuotes from "./AllQuotes";

async function App() {
  const url = "http://localhost:300";
  const [quote, setQuote] = useState("");
  const [inputValue, setInputValue] = useState("");
  let response = await fetch(url);
  let quotesLength = await response.json();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotesLength);

      const options = { type: "GET", index: randomIndex };

      let quoteRes = fetch(url + "/", options)
        .then((res) => res.json)
        .then((quoteRes) => setQuote(quoteRes.quote));
    }, 9000); // 9 seconds in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once

  function addQuote() {
    const options = { type: "POST", body: inputValue };
    fetch(url + "/", options);
  }

  return (
    <div>
      <MusicGIF src="./CodeSymbol.jpg" />
      <QuoteHeading />
      <MusicGIF src="./musicSymbol.png" />
      <Quote quote={quote} />

      <input
        type="text"
        placeholder="Enter a new quote"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addQuote}>Add Quote</button>
      <AllQuotes />
    </div>
  );
}

export default App;
