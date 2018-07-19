/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const n2 = n * n;
  const board = (new Array(n2)).fill(false);

  const isPosValid = (row, col) => {
    // check all rows with col
    for (let i = 0; i < n; ++i) {
      if (board[i * n + col] && i !== row) return false;
    }

    // check all cols with row
    for (let i = 0; i < n; ++i) {
      if (board[row * n + i] && i !== col) return false;
    }

    // check 45 direction
    var row1 = row >= col ? row - col : 0;
    var col1 = row >= col ? 0 : col - row;
    while(row1 < n && col1 < n) {
      if (row1 !== row && board[row1 * n + col1]) return false;
      ++row1;
      ++col1;
    }

    // check 135 direction
    var row2 = row + col >= n - 1 ? row + col - n + 1 : 0;
    var col2 = row + col >= n - 1 ? n - 1 : row + col;
    while(row2 < n && col2 >= 0) {
      if (row2 !== row && board[row2 * n + col2]) return false;
      ++row2;
      --col2;
    }

    return true;
  };

  let solutions = [];
  findSolutions = row => {
    for(let col = 0; col < n; ++col) {
      if (!isPosValid(row, col)) continue;

      board[row * n + col] = true;
      if (row < n - 1) {
        findSolutions(row + 1);
      } else {
        solutions.push(Array.from(board));
      }
      board[row * n + col] = false;
    }
  }

  findSolutions(0);

  toResult = solutions => {
    let strArrayArray = [];
    solutions.forEach(solution => {
      let strArray = [];
      for(let i = 0; i < n; ++i) {
        let str = "";
        for (let j = 0; j < n; ++j) {
          str += (solution.shift() ? "Q" : ".");
        }
        strArray.push(str);
      }
      strArrayArray.push(strArray);
    });

    return strArrayArray;
  }
  return toResult(solutions);
};