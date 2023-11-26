function findPaths(maze, row, col, paths) {
  if (row === maze.length - 1 && col === maze[0].length - 1) {
    paths.push("");
    return;
  }

  if (
    row < 0 ||
    row >= maze.length ||
    col < 0 ||
    col >= maze[0].length ||
    maze[row][col] === 1
  ) {
    return;
  }

  findPaths(maze, row + 1, col, paths);
  findPaths(maze, row, col + 1, paths);

  for (let path of paths) {
    path += row < maze.length - 1 ? "D" : "R";
  }
}

function findAllPaths(maze) {
  const paths = [];
  findPaths(maze, 0, 0, paths);
  return paths;
}

const maze = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

const paths = findAllPaths(maze);
console.log(paths);
