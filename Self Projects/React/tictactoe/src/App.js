import React, { useState, useEffect } from "react";

const initialBoard = Array(9).fill(null);
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const checkWinner = () => {
      for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          return;
        }
      }
      if (board.every((cell) => cell !== null)) {
        setWinner("Draw");
      }
    };

    checkWinner();
  }, [board]);

  useEffect(() => {
    if (currentPlayer === "O" && winner === null) {
      const availableMoves = board.reduce((acc, cell, index) => {
        if (cell === null) acc.push(index);
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      const newBoard = [...board];
      newBoard[availableMoves[randomIndex]] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer("X");
    }
  }, [currentPlayer, board, winner]);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer("O");
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => (
    <div className="cell" onClick={() => handleCellClick(index)}>
      {board[index]}
    </div>
  );

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && (
        <div className="message">
          {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
        </div>
      )}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default App;
