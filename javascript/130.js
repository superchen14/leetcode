/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) return;
  if (board[0].length === 0) return;
  const rowNum = board.length;
  const colNum = board[0].length;
  const map = {};
  function markAsTracked(i, j) {
    map[i * colNum + j] = true;
  }

  function isTracked(i, j) {
    return map[i * colNum + j];
  }

  findRelatedNodesAndMarkAsTracked = (i, j) => {
    if (board[i][j] === "X") return;
    if (isTracked(i, j)) return;

    markAsTracked(i, j);
    let list = [[i, j]];

    while(list.length > 0) {
      let current = list.shift();
      const [i, j] = current;

      // left one
      if (j !== 0 && board[i][j - 1] !== "X" && !isTracked(i, j - 1)) {
        markAsTracked(i, j - 1);
        list.push([i, j - 1]);
      }

      // right one
      if (j !== colNum - 1 && board[i][j + 1] !== "X" && !isTracked(i, j + 1)) {
        markAsTracked(i, j + 1);
        list.push([i, j + 1]);
      }

      // up one
      if (i !== 0 && board[i - 1][j] !== "X" && !isTracked(i - 1, j)) {
        markAsTracked(i - 1, j);
        list.push([i - 1, j]);
      }

      // down one
      if (i !== rowNum - 1 && board[i + 1][j] !== "X" && !isTracked(i + 1, j)) {
        markAsTracked(i + 1, j);
        list.push([i + 1, j]);
      }
    }
  }

  // top line
  for (let j = 0; j < colNum; ++j) {
    findRelatedNodesAndMarkAsTracked(0, j);
  }

  // bottom line
  for (let j = 0; j < colNum; ++j) {
    findRelatedNodesAndMarkAsTracked(rowNum - 1, j);
  }

  // left most column
  for (let i = 0; i < rowNum; ++i) {
    findRelatedNodesAndMarkAsTracked(i, 0);
  }

  // right most column
  for (let i = 0; i < rowNum; ++i) {
    findRelatedNodesAndMarkAsTracked(i, colNum - 1);
  }

  for (let i = 0; i < rowNum; ++i) {
    for (let j = 0; j < colNum; ++j) {
      if (board[i][j] !== "X" && !isTracked(i, j)) {
        board[i][j] = "X";
      }
    }
  }
};

solve([["O","X","O"],["X","O","X"],["O","X","O"]]);