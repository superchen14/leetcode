/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let lastRow = [];
  for(let i = 1; i <= rowIndex + 1; ++i) {
    if (i === 1) { lastRow = [1]; continue; }
    const currentRow = [];
    for (let j = 0; j < i; ++j) {
      if (j === 0 || j === i - 1) {
        currentRow.push(1);
      } else {
        currentRow.push(lastRow[j - 1] + lastRow[j]);
      }
    }
    lastRow = currentRow;
  }

  return lastRow;
};