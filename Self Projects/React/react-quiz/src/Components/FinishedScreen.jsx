function FinishedScreen({ points, maxPoints, highScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        {" "}
        You scored <strong>{points}</strong> out of {maxPoints}. (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore"> your highest score so far {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
