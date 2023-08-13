/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];

  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;

  while (result.length < m * n) {
    // Traverse from left to right
    for (let i = left; i <= right && result.length < m * n; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom && result.length < m * n; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left
    for (let i = right; i >= left && result.length < m * n; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // Traverse from bottom to top
    for (let i = bottom; i >= top && result.length < m * n; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
};
