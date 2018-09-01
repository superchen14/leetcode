/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let lastRow = [];
  triangle.forEach(row => {
    if (row.length === 1) {
      lastRow = row;
    } else {
      let currentRow = [];
      for (let i = 0; i < row.length; ++i) {
        if (i === 0) {
          currentRow[i] = row[i] + lastRow[i];
        } else if (i === row.length - 1) {
          currentRow[i] = row[i] + lastRow[i - 1];
        } else {
          currentRow[i] = row[i] + Math.min(lastRow[i - 1], lastRow[i]);
        }
      }
      lastRow = currentRow;
    }
  });
  return Math.min(...lastRow);
};