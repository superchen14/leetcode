# @param {Integer} n
# @return {String[][]}
def is_valid(board, row, col)
  return false if board[row].each_with_index.any? do |item, c|
    c != col && item == "Q"
  end

  return false if board.each_with_index.any? do |line, r|
    r != row && line[col] == "Q"
  end

  if row >= col
    return false if (row - col).upto(board.length - 1).any? do |r|
      c = r - row + col
      r != row && board[r][c] == "Q"
    end
  else
    return false if 0.upto(board.length - 1 - col + row).any? do |r|
      c = col - row + r
      r != row && board[r][c] == "Q"
    end
  end

  if row + col <= board.length
    return false if 0.upto(row + col).any? do |r|
      c = row + col - r
      r != row && board[r][c] == "Q"
    end
  else
    return false if (row + col - board.length + 1).upto(board.length - 1).any? do |r|
      c = row + col - r
      r != row && board[r][c] == "Q"
    end
  end

  true
end

def find_solution board, row, col
  if row == board.length
    sum = 0
    board.each do |line|
      line.each do |item|
        sum += 1 if item == "Q"
      end
    end
    return sum == board.length
  end

  return find_solution(board, row + 1, 0) if col == board.length
  return find_solution(board, row, col + 1) unless is_valid(board, row, col)
  board[row][col] = "Q"
  if find_solution(board, row, col + 1)
    return true
  else
    board[row][col] = "*"
    return find_solution(board, row, col + 1)
  end
end

def solve_n_queens(n)
  board = Array.new(n, Array.new(n, "*"))
  if find_solution(board, 0, 0)
    return board
  else
    return nil
  end
end

p solve_n_queens(4)