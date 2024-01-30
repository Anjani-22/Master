import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  const mins = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  useEffect(
    function () {
      const interValid = setInterval(() => dispatch({ type: "tick" }), 1000);

      return () => clearInterval(interValid);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
