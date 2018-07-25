# @param {Integer[][]} obstacle_grid
# @return {Integer}
def unique_paths_with_obstacles(obstacle_grid)
  row_count = obstacle_grid.length
  col_count = obstacle_grid[0].length

  values = Array.new(row_count * col_count, 0)
  0.upto(row_count - 1).each do |row|
    0.upto(col_count - 1).each do |col|
      next if obstacle_grid[row][col] == 1

      if row == 0 && col == 0
        values[0] = 1
        next
      end

      if row == 0
        values[col] = values[col - 1]
        next
      end

      if col == 0
        values[row * col_count] = values[(row - 1) * col_count]
        next
      end

      values[row * col_count + col] = values[row * col_count + col - 1] + values[(row - 1) * col_count + col]
    end
  end

  values[-1]
end