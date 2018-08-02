/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var rowNum = matrix.length;
  if (!rowNum) return matrix;
  var colNum = matrix[0].length;
  if (!colNum) return matrix;

  var isFirstRowContainsZero = matrix[0].indexOf(0) !== -1;
  var isFirstColContainsZero = false;
  for (var row = 0; row < rowNum; ++row) {
    if (!matrix[row][0]) {
      isFirstColContainsZero = true;
      break;
    }
  }

  for (var row = 1; row < rowNum; ++row) {
    for (var col = 1; col < colNum; ++col) {
      if (!matrix[row][col]) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (var row = 1; row < rowNum; ++row) {
    if (matrix[row][0]) continue;
    for (var col = 0; col < colNum; ++col) {
      matrix[row][col] = 0;
    }
  }

  for (var col = 1; col < colNum; ++col) {
    if (matrix[0][col]) continue;
    for (var row = 0; row < rowNum; ++row) {
      matrix[row][col] = 0;
    }
  }

  if (isFirstRowContainsZero) {
    for (var col = 0; col < colNum; ++col) {
      matrix[0][col] = 0;
    }
  };
  if (isFirstColContainsZero) {
    for (var row = 0; row < rowNum; ++row) {
      matrix[row][0] = 0;
    }
  }
};