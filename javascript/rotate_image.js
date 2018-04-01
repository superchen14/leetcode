/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  // mirror along x == y
  function mirrorAlongXY(matrix) {
    for (let i = 0; i < n - 1; ++i) {
      for (let j = i; j < n; ++j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  function mirrorAlongX(matrix) {
    for (let i = 0; i < n; ++i) {
      matrix[i].reverse();
    }
  }

  mirrorAlongXY(matrix);
  mirrorAlongX(matrix);
};