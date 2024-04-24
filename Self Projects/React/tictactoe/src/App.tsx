import React, { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";

const initialBoard: string[] = Array(9).fill("");

const winningCombinations: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App: React.FC = () => {
  const [computersMove, setComputersMove] = useState<boolean>(false);
  const [board, setBoard] = useState<(string | null)[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<string | null>("X");
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    console.log("inside use effect winner ", winner);
    const checkWinner = (): void => {
      for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          setCurrentPlayer(null);
          console.log("winner ", winner);
          return;
        }
      }
      if (board.every((cell) => cell !== "")) {
        setWinner("Draw");
      }
    };

    if (!winner) checkWinner();
  }, [board, winner]);

  useEffect(() => {
    console.log("use effect computer move check ", winner);
    if (winner == null && currentPlayer === "O") {
      const computerChance = () => {
        if (winner) return;
        const availableMoves: number[] = board.reduce<number[]>(
          (acc, cell, index) => {
            if (cell === "") acc.push(index);
            return acc;
          },
          []
        );

        const checkMove = (moveValue: string) => {
          for (const move of availableMoves) {
            const newBoard = [...board];
            newBoard[move] = moveValue;
            for (const [a, b, c] of winningCombinations) {
              console.log("👉", a, b, c, board[a], board[b], board[c]);
              if (
                newBoard[a] === moveValue &&
                newBoard[b] === moveValue &&
                newBoard[c] === moveValue
              ) {
                newBoard[move] = "O";
                setBoard(newBoard);
                setCurrentPlayer("X");

                return true;
              }
            }
            newBoard[move] = null;
          }
          return false;
        };

        if (checkMove("O") || checkMove("X")) {
          setComputersMove(false);
          return;
        } else {
          const randomIndex = Math.floor(Math.random() * availableMoves.length);

          const newBoard: (string | null)[] = [...board];

          newBoard[availableMoves[randomIndex]] = currentPlayer;
          setBoard(newBoard);
          setCurrentPlayer("X");
          setComputersMove(false);
        }
      };
      setTimeout(computerChance, 1000);
    }
  }, [currentPlayer, board, winner]);

  const handleCellClick = (index: number): void => {
    if (currentPlayer === "O" || winner || board[index]) return;
    console.log("clicked");
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer("O");
    setComputersMove(true);
  };

  const resetGame = (): void => {
    setBoard(initialBoard);
    setCurrentPlayer(winner === "O" ? "O" : "X");
    setWinner(null);
    setComputersMove(false);
  };

  const renderCell = (index: number): JSX.Element => (
    <div className="cell" onClick={() => handleCellClick(index)}>
      {board[index]}
    </div>
  );

  return (
    <div className="App">
      <ScoreBoard winner={winner} onReset={resetGame} />
      <h1>Tic Tac Toe </h1>
      <div className="info">
        {winner ? (
          <h1 className="turn"> Result </h1>
        ) : (
          <h1 className="turn">
            {" "}
            {`${currentPlayer === "X" ? "Your" : " 💻 Machine"}`} Move
          </h1>
        )}
        <div className="board">
          {board.map((cell, index) => renderCell(index))}
        </div>
        {winner && <img src={`./${winner}.png`} className="img" alt="winner" />}
      </div>
      {winner && (
        <div className="message">
          {winner === "Draw"
            ? "It's a draw!"
            : `Player ${winner} ${winner === "X" ? "Human" : "Computer"} wins!`}
        </div>
      )}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;
