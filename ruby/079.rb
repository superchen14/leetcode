def exist_with_start_pos(word, board, used_board, row, col, row_count, col_count)
  return false if row < 0 || row == row_count
  return false if col < 0 || col == col_count
  return board[row][col] == word[0] && !used_board[row][col] if word.length == 1

  return false if used_board[row][col]
  return false if board[row][col] != word[0]

  result = true
  used_board[row][col] = true
  return true if exist_with_start_pos(word[1..-1], board, used_board, row + 1, col    , row_count, col_count)
  return true if exist_with_start_pos(word[1..-1], board, used_board, row - 1, col    , row_count, col_count)
  return true if exist_with_start_pos(word[1..-1], board, used_board, row    , col - 1, row_count, col_count)
  return true if exist_with_start_pos(word[1..-1], board, used_board, row    , col + 1, row_count, col_count)
  used_board[row][col] = false
  return false
end

# @param {Character[][]} board
# @param {String} word
# @return {Boolean}
def exist(board, word)
  row_count = board.length
  col_count = board[0].length

  used_board = []
  1.upto(row_count) do
    used_board.push(Array.new(col_count, false))
  end

  0.upto(row_count - 1) do |row|
    0.upto(col_count - 1) do |col|
      return true if exist_with_start_pos(word, board, used_board, row, col, row_count, col_count)
    end
  end

  return false
end