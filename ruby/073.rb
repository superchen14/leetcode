# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
  is_top_row_zero = matrix[0].any? {|num| num == 0}
  is_left_col_zero = 0.upto(matrix.length - 1).any? {|i| matrix[i][0] == 0}

  1.upto(matrix.length - 1).each do |row|
    matrix[row][0] = 0 if matrix[row].any? {|num| num == 0}
  end

  1.upto(matrix[0].length - 1).each do |col|
    matrix[0][col] = 0 if 0.upto(matrix.length - 1).any? {|row| matrix[row][col] == 0}
  end

  1.upto(matrix.length - 1).each do |row|
    if matrix[row][0] == 0
      0.upto(matrix[row].length - 1) do |col|
        matrix[row][col] = 0
      end
    end
  end

  1.upto(matrix[0].length - 1).each do |col|
    1.upto(matrix.length - 1).each {|row| matrix[row][col] = 0} if matrix[0][col] == 0
  end

  0.upto(matrix[0].length - 1).each {|col| matrix[0][col] = 0} if is_top_row_zero
  0.upto(matrix.length - 1).each {|row| matrix[row][0] = 0} if is_left_col_zero
end