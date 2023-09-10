/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hashmap = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      // Skip empty cells
      if (cell === ".") continue;

      const boxStartRow = Math.floor(i / 3) * 3;
      const boxStartCol = Math.floor(j / 3) * 3;

      for (const [row, col] of hashmap[cell] || []) {
        console.log();
        if (
          row === i || // Check repetition if same row
          col === j || // Check repetition if same column
          (Math.floor(row / 3) === Math.floor(boxStartRow / 3) &&
            Math.floor(col / 3) === Math.floor(boxStartCol / 3)) // Check repetition if same 3x3 box
        ) {
          return false;
        }
      }

      if (!hashmap[cell]) {
        hashmap[cell] = [];
      }

      hashmap[cell].push([i, j]);
    }
  }

  return true;
};
