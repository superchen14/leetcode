/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const results = [];
  for(let i = 1; i <= numRows; ++i) {
    if (i === 1) { results.push([1]); continue; }
    const lastRow = results[results.length - 1];
    const currentRow = [];
    for (let j = 0; j < i; ++j) {
      if (j === 0 || j === i - 1) {
        currentRow.push(1);
      } else {
        currentRow.push(lastRow[j - 1] + lastRow[j]);
      }
    }
    results.push(currentRow);
  }

  return results;
};