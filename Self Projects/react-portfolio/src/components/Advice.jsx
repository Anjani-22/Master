import React, { useState, useEffect } from "react";

const AdviceFetcher = () => {
  const [advice, setAdvice] = useState("");
  const [fetching, setFetching] = useState(true);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
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

    return () => clearInterval(intervalId);
  }, [fetching]);

  return (
    <div
      className="advice-container"
      onMouseEnter={() => setFetching(false)}
      onMouseLeave={() => setFetching(true)}
    >
      <p> {advice}</p>
    </div>
  );
};

export default AdviceFetcher;
