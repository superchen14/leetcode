/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let map = {};
  for (let row = 0; row < m; ++row) {
    for (let col = 0; col < n; ++col) {
      let pathCount = 0;
      if (row === 0 && col === 0) {
        pathCount = 1;
      } else {
        if (row !== 0) pathCount = pathCount + map[(row - 1) * n + col];
        if (col !== 0) pathCount = pathCount + map[row * n + col - 1];
      }
      map[row * n + col] = pathCount;
    }
  }

  return map[m * n - 1];
};