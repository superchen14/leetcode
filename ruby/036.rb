# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
  size = 9
  0.upto(size - 1).each do |row_num|
    row = board[row_num].dup.select{|c| c != "."}
    return false if row.length != row.uniq.length
  end

  0.upto(size - 1).each do |col_num|
    col = board.map{|row| row[col_num]}.select{|c| c != "."}
    return false if col.length != col.uniq.length
  end

  0.upto(2).each do |i|
    0.upto(2).each do |j|
      row_start = i * 3
      col_start = j * 3
      char_group = []
      row_start.upto(row_start + 2) do |row_num|
        char_group += board[row_num][col_start..col_start+2]
      end
      char_group.select!{|c| c != "."}
      return false if char_group.length != char_group.uniq.length
    end
  end

  true
end