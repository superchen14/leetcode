# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.

def is_valid(board, i, j)
  value = board[i][j]

  is_row_invalid = board[i].each_with_index.any? {|char, index| index != j && char == value}
  return false if is_row_invalid

  is_col_invalid = board.map{|row| row[j]}.each_with_index.any? {|char, index| index != i && char == value}
  return false if is_col_invalid

  group_row = (i / 3).to_i
  group_col = (j / 3).to_i
  group = []
  is_group_invalid = false
  (3 * group_row).upto(3 * group_row + 2) do |row|
    (3 * group_col).upto(3 * group_col + 2) do |col|
      is_group_invalid = true if row != i && col != j && board[row][col] == value
    end
  end

  !is_group_invalid
end

def solve_sudoku_helper(board, i, j)
  return board[8][8] != "." if i == 9
  return solve_sudoku_helper(board, i + 1, 0) if j == 9
  return solve_sudoku_helper(board, i, j + 1) if (board[i][j] != ".") 

  has_solution = false
  1.upto(9).each do |value|
    board[i][j] = value.to_s
    if is_valid(board, i, j) && solve_sudoku_helper(board, i, j + 1)
      has_solution = true
      break
    else
      board[i][j] = "."
    end
  end
  
  has_solution
end

def solve_sudoku(board)
  solve_sudoku_helper(board, 0, 0)
end