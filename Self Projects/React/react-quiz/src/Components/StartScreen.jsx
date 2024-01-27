function StartScreen({ numQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome</h2>
      <h3>{numQues} questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {" "}
        Let start
      </button>
    </div>
  );
}

export default StartScreen;
