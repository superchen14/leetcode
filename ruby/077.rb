# @param {Integer} n
# @param {Integer} k
# @return {Integer[][]}
def combine(n, k)
  map = []
  0.upto(k) do |row|
    map[row] = Array.new(n + 1, [])
  end

  1.upto(n).each do |col|
    1.upto(k).each do |row|
      break if row > col

      if row == 1 && col == 1
        map[1][1] = [[1]]
        next
      end

      map[row][col] = map[row][col - 1] + (map[row - 1][col - 1].length == 0 ? [[col]] : map[row - 1][col - 1].map{|a| a.dup.push(col)})
    end
  end

  p map[k][n]
end