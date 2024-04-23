import React, { useEffect, useState } from "react";

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
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    console.log("inside use effect comput");
    if (currentPlayer === "O" && winner === null) {
      setComputersMove(true);
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
          newBoard[move] = "";
        }
        return false;
      };

      if (checkMove("O") || checkMove("X")) {
        setComputersMove(false);
        return;
      } else {
        const randomIndex = Math.floor(Math.random() * availableMoves.length);

        const newBoard: string[] = [...board];

        newBoard[availableMoves[randomIndex]] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer("X");
        setComputersMove(false);
      }
    }
  }, [currentPlayer, board, winner]);

  useEffect(() => {
    console.log("inside use effect winner");
    const checkWinner = (): void => {
      for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          return;
        }
      }
      if (board.every((cell) => cell !== "")) {
        setWinner("Draw");
      }
    };

    checkWinner();
  }, [board]);
  const handleCellClick = (index: number): void => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer("O");
  };

  const resetGame = (): void => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index: number): JSX.Element => (
    <div className="cell" onClick={() => handleCellClick(index)}>
      {board[index]}
    </div>
  );

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="info">
        <div className="board">
          {board.map((cell, index) => renderCell(index))}
        </div>
        {winner && <img src={`./${winner}.png`} className="img" />}
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
