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

      for (const [row, col] of hashmap[cell] || []) {
        if (
          row === i || // Check repetition if same row
          col === j || // Check repetition if same column
          (Math.floor(row / 3) === Math.floor(i / 3) &&
            Math.floor(col / 3) === Math.floor(j / 3)) // Check repetition if same 3x3 box
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

// 2D hash table
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = {};
  const col = {};
  const box = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      if (cell === ".") continue;

      // Check repetition if same row
      if (!row[i]) {
        row[i] = new Set();
      }
      if (row[i].has(cell)) {
        return false;
      }
      row[i].add(cell);

      // Check repetition if same column
      if (!col[j]) {
        col[j] = new Set();
      }
      if (col[j].has(cell)) {
        return false;
      }
      col[j].add(cell);

      // Check repetition if same 3x3 box
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (!box[boxIndex]) {
        box[boxIndex] = new Set();
      }
      if (box[boxIndex].has(cell)) {
        return false;
      }
      box[boxIndex].add(cell);
    }
  }

  return true;
};
