# @param {Integer} n
# @return {Integer[][]}
def generate_matrix(n)
  matrix = []
  n.times { matrix.push(Array.new(n, 0)) }

  min_col = 0
  max_col = n - 1
  min_row = 0
  max_row = n - 1

  value = 1
  while true do
    return matrix if min_col > max_col
    min_col.upto(max_col).each do |col|
      matrix[min_row][col] = value
      value += 1
    end
    min_row += 1

    return matrix if min_row > max_row
    min_row.upto(max_row).each do |row|
      matrix[row][max_col] = value
      value += 1
    end
    max_col -= 1

    return matrix if min_col > max_col
    max_col.downto(min_col).each do |col|
      matrix[max_row][col] = value
      value += 1
    end
    max_row -= 1

    return matrix if min_row > max_row
    max_row.downto(min_row).each do |row|
      matrix[row][min_col] = value
      value += 1
    end
    min_col += 1
  end
end