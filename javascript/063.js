/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let map = {};
  const rowCount = obstacleGrid.length;
  if (rowCount === 0) return 0;
  const colCount = obstacleGrid[0].length;
  if (colCount === 0) return 0;

  for (let row = 0; row < rowCount; ++row) {
    for (let col = 0; col < colCount; ++col) {
      if (obstacleGrid[row][col] === 1) {
        map[row * colCount + col] = 0;
        continue;
      }

      let pathCount = 0;
      if (row === 0 && col === 0) {
        pathCount = 1;
      } else {
        if (row !== 0) pathCount += map[(row - 1) * colCount + col];
        if (col !== 0) pathCount += map[row * colCount + col - 1];
      }
      map[row * colCount + col] = pathCount;
    }
  }

  return map[rowCount * colCount - 1];
};