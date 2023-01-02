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

assert.strictEqual(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]),
  "Finished!",
);

assert.strictEqual(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
  "Try again!",
);
