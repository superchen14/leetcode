# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
  return [] if matrix.length == 0
  return [] if matrix[0].length == 0

  min_col = 0
  max_col = matrix[0].length - 1
  min_row = 0
  max_row = matrix.length - 1

  result = []
  while true do
    return result if min_col > max_col
    min_col.upto(max_col).each do |col|
      result.push(matrix[min_row][col])
    end
    min_row += 1

    return result if min_row > max_row
    min_row.upto(max_row).each do |row|
      result.push(matrix[row][max_col])
    end
    max_col -= 1

    return result if min_col > max_col
    max_col.downto(min_col).each do |col|
      result.push(matrix[max_row][col])
    end
    max_row -= 1

    return result if min_row > max_row
    max_row.downto(min_row).each do |row|
      result.push(matrix[row][min_col])
    end
    min_col += 1
  end

  result
end