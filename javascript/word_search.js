/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var usedBoard = [];
  var iMax = board.length - 1;
  var jMax = board[0].length - 1;
  for(var i = 0; i <= iMax; ++i) {
    usedBoard.push([]);
    for(var j = 0; j <= jMax; ++j) {
      usedBoard[i].push(false);
    }
  }

  // make sure usedBoard[i][j] === false before call this method
  function existWithStartPos(i, j, word) {
    if (i > iMax || i < 0 || j > jMax || j < 0) return false;
    if (board[i][j] !== word[0]) return false;
    if (usedBoard[i][j]) return false;
    if (word.length === 1) {
      if (board[i][j] === word[0]) {
        return true;
      } else {
        return false;
      }
    }

    usedBoard[i][j] = true;
    if (existWithStartPos(i + 1, j, word.substring(1))) return true;
    if (existWithStartPos(i - 1, j, word.substring(1))) return true;
    if (existWithStartPos(i, j + 1, word.substring(1))) return true;
    if (existWithStartPos(i, j - 1, word.substring(1))) return true;
    usedBoard[i][j] = false;

    return false;
  }


  for(var i = 0; i <= iMax; ++i) {
    for(var j = 0; j <= jMax; ++j) {
      if(existWithStartPos(i, j, word)) return true;
    }
  }

  return false;
};

exist([["A", "A"]], "AAA");