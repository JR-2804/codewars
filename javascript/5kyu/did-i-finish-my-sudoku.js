const regionBoundaries = {
  0: [
    [0, 3],
    [0, 3],
  ],
  1: [
    [0, 3],
    [3, 6],
  ],
  2: [
    [0, 3],
    [6, 9],
  ],
  3: [
    [3, 6],
    [0, 3],
  ],
  4: [
    [3, 6],
    [3, 6],
  ],
  5: [
    [3, 6],
    [6, 9],
  ],
  6: [
    [6, 9],
    [0, 3],
  ],
  7: [
    [6, 9],
    [3, 6],
  ],
  8: [
    [6, 9],
    [6, 9],
  ],
};

const getRow = (board, rowIndex) => board[rowIndex];

const getColumn = (board, columnIndex) => board.map((row) => row[columnIndex]);

const getRegion = (board, region) =>
  board
    .slice(...regionBoundaries[region][0])
    .flatMap((row) => row.slice(...regionBoundaries[region][1]));

const isValidSudokuList = (row) =>
  row
    .reduce(
      (acc, current) => {
        acc[current - 1]++;
        return acc;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    )
    .filter((current) => current !== 1).length === 0;

const doneOrNot = (board) => {
  for (let i = 0; i < 9; i++) {
    if (
      !isValidSudokuList(getRow(board, i)) ||
      !isValidSudokuList(getColumn(board, i)) ||
      !isValidSudokuList(getRegion(board, i))
    ) {
      return "Try again!";
    }
  }

  return "Finished!";
};
