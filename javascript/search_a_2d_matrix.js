/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rowCount = matrix.length;
  if (rowCount === 0) return false;

  const colCount = matrix[0].length;
  if (colCount === 0) return false;

  if (matrix[0][0] > target) return false;

  let row = 0;
  while(true) {
    if (matrix[row][0] === target) { return true; }
    if (row === rowCount - 1) break;
    if (matrix[row + 1][0] <= target) {
      ++row;
    } else {
      break;
    }
  }

  for (let col = 0; col < colCount; ++col) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) return false;
  }

  return false;
};