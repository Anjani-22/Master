/*here u just iterate the board create 3 maps for rows, clus and sungrides, with key as row/col/sungrid-No, and value as present on borad
while iterating if value already exists in hasmap, thne ret false else insert that value at particuar row no, co no and sub grid no in respt hashmap


In other bure force u do same things jyst instrad of    hashmap ,,, all the rows/cols/ subgrids have array of size 9 indiacationg 9 numbers anf fills them with false
so when ietrating the borad if at paricular row and col subgrid the no is mraekd as true eg row[ row no][numonBoard-1] = true,

before marking them true it check if itsalready true  like If(row[ row no][numonBoard-1]{return false}
    if true return false else sets the true value*/
function isValidSudoku(board) {
  // Create three hashmaps to store the numbers in each row, column, and subgrid.
  let rows = new Map();
  let columns = new Map();
  let subgrids = new Map();

  // Iterate over the board.
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // Get the number at the current cell.
      let number = board[row][col];

      // Check if the number is already in the row, column, or subgrid.
      if (rows.has(row) && rows.get(row) === number) {
        return false;
      }
      if (columns.has(col) && columns.get(col) === number) {
        return false;
      }
      let subgrid_index = (row / 3) * 3 + col / 3;
      if (
        subgrids.has(subgrid_index) &&
        subgrids.get(subgrid_index) === number
      ) {
        return false;
      }

      // Add the number to the row, column, and subgrid hashmaps.
      rows.set(row, number);
      columns.set(col, number);
      subgrids.set(subgrid_index, number);
    }
  }

  // If we reach this point, the board is valid.
  return true;
}
