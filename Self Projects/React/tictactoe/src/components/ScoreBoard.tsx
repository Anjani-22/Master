import React, { useState, useEffect } from "react";

interface ScoreBoardProps {
  winner: string | null;
  onReset: () => void; // Function that takes no arguments and returns void
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ winner, onReset }) => {
  const [machineScore, setMachineScore] = useState<number[]>([]);
  const [humanScore, setHumanScore] = useState<number[]>([]);

  const [inputRounds, setInputRounds] = useState<number>(5);

  useEffect(() => {
    if (winner === "X") {
      setHumanScore((scoreArr) => [...scoreArr, 1]);
      setMachineScore((scoreArr) => [...scoreArr, 0]);
    } else if (winner === "O") {
      setMachineScore((scoreArr) => [...scoreArr, 1]);
      setHumanScore((scoreArr) => [...scoreArr, 0]);
    } else if (winner === "Draw") {
      setHumanScore((scoreArr) => [...scoreArr, 0]);
      setMachineScore((scoreArr) => [...scoreArr, 0]);
    }
  }, [winner]);

  const handleNewGame = () => {
    onReset();
    setHumanScore([]);
    setMachineScore([]);
  };
  const calculateTotalScore = (scores: number[]): number => {
    return scores.reduce((total, score) => total + score, 0);
  };
  const totalHumanScore = calculateTotalScore(humanScore);
  const totalMachineScore = calculateTotalScore(machineScore);
  const round = machineScore.length;

  if (round > inputRounds) handleNewGame();

  return (
    <div className="scoreboard">
      <div>
        <label htmlFor="inputRounds">Select Number of Rounds (5-10): </label>
        <input
          type="number"
          id="inputRounds"
          min={5}
          max={10}
          value={inputRounds}
          onChange={(e) => setInputRounds(parseInt(e.target.value))}
          disabled={round < inputRounds}
        />
      </div>

      <div className="score">
        <span>Human:</span>
        {humanScore.map((score, index) => (
          <span key={index}>{score}</span>
        ))}
        <span className="total">Total: {totalHumanScore}</span>
      </div>
      <div className="score">
        <span>Machine:</span>
        {machineScore.map((score, index) => (
          <span key={index}>{score}</span>
        ))}
        <span className="total">Total: {totalMachineScore}</span>
      </div>

      <button onClick={handleNewGame}>New Game from Beginning</button>

      {round >= inputRounds && (
        <div className="celebrate">
          Final Winner{" "}
          {totalHumanScore > totalMachineScore
            ? "Human"
            : totalHumanScore === totalMachineScore
            ? "Both"
            : "Computer"}
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
