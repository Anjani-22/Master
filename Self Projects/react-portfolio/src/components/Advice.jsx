import React, { useState, useEffect } from "react";

const AdviceFetcher = () => {
  const [data, setdata] = useState("");
  const [fetching, setFetching] = useState(true);
  const [fetchingJoke, setFetchingJoke] = useState(false);

  const fetchAdvice = async () => {
    try {
      if (fetching) {
        if (fetchingJoke) {
          const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
          );
          const jokeData = await response.json();
          setdata(`${jokeData.setup} ${jokeData.punchline}`);

          console.log("Joke");
        } else {
          const response = await fetch("https://api.adviceslip.com/advice");
          const adviceData = await response.json();
          setdata(adviceData.slip.advice);

          console.log("Adv");
        } //else end
        setFetchingJoke((prevState) => !prevState);
      } //outer if fetching end
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (fetching) {
        fetchAdvice();
      }
    }, 6000);

    fetchAdvice();

    return () => clearInterval(intervalId);
  }, [fetching]);

  return (
    <div
      className="advice-container"
      onMouseEnter={() => setFetching(false)}
      onMouseLeave={() => setFetching(true)}
    >
      <p> {data}</p>
    </div>
  );
};

export default AdviceFetcher;
