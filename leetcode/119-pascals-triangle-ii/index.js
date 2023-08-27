/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const mat = [];
  for (let i = 0; i <= rowIndex; i++) {
    mat[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        mat[i].push(1);
      } else {
        mat[i][j] = mat[i - 1][j - 1] + mat[i - 1][j];
      }
    }
  }
  return mat[rowIndex];
};
