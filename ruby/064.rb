# @param {Integer[][]} grid
# @return {Integer}
def min_path_sum(grid)
  row_count = grid.length
  col_count = grid[0].length

  0.upto(row_count - 1).each do |row|
    0.upto(col_count - 1).each do |col|
      next if row == 0 && col == 0

      if row == 0
        grid[row][col] += grid[row][col - 1]
        next
      end

      if col == 0
        grid[row][col] += grid[row - 1][col]
        next
      end

      up = grid[row - 1][col]
      left = grid[row][col - 1]
      grid[row][col] += (left < up ? left : up)
    end
  end

  grid[row_count - 1][col_count - 1]
end