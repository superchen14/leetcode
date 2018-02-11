/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = [];
  for(let i = 0; i < n; ++i) {
    let row = [];
    for(let j = 0; j < n; ++j) {
      row.push(0);
    }
    matrix.push(row);
  }

  let leftOffset = 0;
  let rightOffset = 0;
  let topOffset = 0;
  let bottomOffset = 0;
  num = 1;
  while(true) {
    for(let i = leftOffset; i < n - rightOffset; ++i) {
      matrix[topOffset][i] = num++;
    }
    ++topOffset;
    if (topOffset + bottomOffset >= n) break;

    let col = n - 1 - rightOffset;
    for(let i = topOffset; i < n - bottomOffset; ++i) {
      matrix[i][col] = num++;
    }
    ++rightOffset;
    if (leftOffset + rightOffset >= n) break;

    let row = n - 1 - bottomOffset;
    for (let i = n - 1 - rightOffset; i >= leftOffset; --i) {
      matrix[row][i] = num++;
    }
    ++bottomOffset;
    if (topOffset + bottomOffset >= n) break;

    for (let i = n - 1 - bottomOffset; i >= topOffset; --i) {
      matrix[i][leftOffset] = num++;
    }
    ++leftOffset;
    if (leftOffset + rightOffset >= n) break;
  }

  return matrix;
};