# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
  values = Array.new(m * n, 0)
  0.upto(n - 1).each do |row|
    0.upto(m - 1).each do |col|
      if row == 0 || col == 0
        values[row * m + col] = 1 
      else
        values[row * m + col] = values[(row - 1) * m + col] + values[row * m + col - 1]
      end
    end
  end

  values[-1];
end