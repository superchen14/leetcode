/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) return [];
  const colCount = matrix[0].length;
  if (colCount === 0) return [];

  let topOffset = 0;
  let bottomOffset = 0;
  let leftOffset = 0;
  let rightOffset = 0;

  let result = [];
  while(true) {
    for(let i = leftOffset; i < colCount - rightOffset; ++i) {
      result.push(matrix[topOffset][i]);
    }
    ++topOffset;
    if (topOffset + bottomOffset >= rowCount) break;

    let col = colCount - 1 - rightOffset;
    for(let i = topOffset; i < rowCount - bottomOffset; ++i) {
      result.push(matrix[i][col]);
    }
    ++rightOffset;
    if (leftOffset + rightOffset >= colCount) break;

    let row = rowCount - 1 - bottomOffset;
    for (let i = colCount - 1 - rightOffset; i >= leftOffset; --i) {
      result.push(matrix[row][i]);
    }
    ++bottomOffset;
    if (topOffset + bottomOffset >= rowCount) break;

    for (let i = rowCount - 1 - bottomOffset; i >= topOffset; --i) {
      result.push(matrix[i][leftOffset]);
    }
    ++leftOffset;
    if (leftOffset + rightOffset >= colCount) break;
  }

  return result;
};

spiralOrder(
  [
    [ 2, 3 ]
   ]
);
