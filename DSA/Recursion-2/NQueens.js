function isSafe(board, row, col) {
  // Check for queens in the same column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  // Check for queens in the upper-left diagonal
  let i = row;
  let j = col;
  while (i >= 0 && j >= 0) {
    if (board[i][j] === 1) {
      return false;
    }
    i--;
    j--;
  }

  // Check for queens in the lower-right diagonal
  i = row;
  j = col;
  while (i < board.length && j < board[0].length) {
    if (board[i][j] === 1) {
      return false;
    }
    i++;
    j++;
  }

  return true;
}

function solveNQueens(board, row) {
  if (row >= board.length) {
    // All queens have been placed successfully
    return 1;
  }

  let count = 0;
  for (let col = 0; col < board[0].length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1; // Place a queen at (row, col)

      count += solveNQueens(board, row + 1);

      board[row][col] = 0; // Remove the queen
    }
  }

  return count;
}

function nQueens(n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  return solveNQueens(board, 0);
}

console.log(nQueens(4)); // Output: 2
