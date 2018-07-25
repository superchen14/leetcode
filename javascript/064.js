/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rowCount = grid.length;
  if (rowCount === 0) return 0;
  const colCount = grid[0].length;
  if (colCount === 0) return 0;

  for (let row = 0; row < rowCount; ++row) {
    for (let col = 0; col < colCount; ++col) {
      let currentSum = 0;
      if (row === 0 && col === 0) continue;
      if (row === 0) grid[row][col] = grid[row][col - 1] + grid[row][col];
      if (col === 0) grid[row][col] = grid[row - 1][col] + grid[row][col];
      if (row !== 0 && col !== 0) grid[row][col] = grid[row][col] + Math.min(grid[row - 1][col], grid[row][col - 1]);
    }
  }

  return grid[rowCount - 1][colCount - 1];
};