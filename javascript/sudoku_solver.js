/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  var helper = function(board, i, j) {
    if (j === 9) return helper(board, i + 1, 0);
    if (i === 9) return true;
    if (board[i][j] !== ".") return helper(board, i, j + 1);

    for (let value = 1; value <= 9; ++value) {
      board[i][j] = value + "";
      if (isValid(board, i, j) && helper(board, i , j + 1)) return true;
      board[i][j] = ".";
    }
  }

  var isValid = function(board, i, j) {
    const value = board[i][j];

    // test row === i
    for (let k = 0; k < 9; ++k) {
      if (j == k) continue;
      if (board[i][k] === board[i][j]) return false;
    }

    // test col === j
    for (let k = 0; k < 9; ++k) {
      if (i == k) continue;
      if (board[k][j] === board[i][j]) return false;
    }

    const subRow = Number.parseInt(i / 3);
    const subCol = Number.parseInt(j / 3);
    for (let k = 0; k < 3; ++k) {
      for (let l = 0; l < 3; ++l) {
        const row = 3 * subRow + k;
        const col = 3 * subCol + l;
        if (row === i || col === j) continue;
        if (board[i][j] === board[row][col]) return false;
      }
    }

    return true;
  }

  helper(board, 0, 0);
};