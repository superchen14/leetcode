# @param {Integer} n
# @return {String[][]}
def is_valid(board, row, col)
  return false if board[row].each_with_index.any? do |item, c|
    c != col && item
  end

  return false if board.each_with_index.any? do |line, r|
    r != row && line[col]
  end

  if row >= col
    return false if (row - col).upto(board.length - 1).any? do |r|
      c = r - row + col
      r != row && board[r][c]
    end
  else
    return false if 0.upto(board.length - 1 - col + row).any? do |r|
      c = col - row + r
      r != row && board[r][c]
    end
  end

  if row + col < board.length
    return false if 0.upto(row + col).any? do |r|
      c = row + col - r
      r != row && board[r][c]
    end
  else
    return false if (row + col - board.length + 1).upto(board.length - 1).any? do |r|
      c = row + col - r
      r != row && board[r][c]
    end
  end

  true
end

def find_solution board, row, results
  if row == board.length
    sum = 0
    board.each do |line|
      line.each do |item|
        sum += 1 if item
      end
    end
    results.push(board.map{|line| line.map {|item| item ? "Q" : "."}.join("")}) if sum == board.length
    return
  end

  0.upto(board.length - 1).each do |col|
    next unless is_valid(board, row, col)
    board[row][col] = true
    find_solution(board, row + 1, results)
    board[row][col] = false
  end
end

def solve_n_queens(n)
  board = []
  1.upto(n).each { board.push(Array.new(n, false)) }
  results = []
  find_solution(board, 0, results)
  results
end