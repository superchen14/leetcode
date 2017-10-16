/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var rowNum = 9;
  var colNum = 9;

  for(var i = 0; i < rowNum; ++i) {
    var row = board[i];
    var hash = {};
    for (var j = 0; j < colNum; ++j) {
      if (row[j] === ".") continue;
      if (hash[row[j]]) return false;
      hash[row[j]] = true;
    }
  }

  for (var i = 0; i < colNum; ++i) {
    var hash = {};
    for (var j = 0; j < rowNum; ++j) {
      if (board[j][i] === ".") continue;
      if (hash[board[j][i]]) return false;
      hash[board[j][i]] = true;
    }
  }

  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      var hash = {};
      for (var k = 0; k < 3; ++k) {
        for (var l = 0; l < 3; ++l) {
          if (board[i * 3 + k][j * 3 + l] === ".") continue;
          if (hash[board[i * 3 + k][j * 3 + l]]) return false;
          hash[board[i * 3 + k][j * 3 + l]] = true;
        }
      }
    }
  }

  return true;
};