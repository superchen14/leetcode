# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def rotate(matrix)
  return if matrix.length == 0

  size = matrix.length
  0.upto(size - 1).each do |i|
    (i + 1).upto(size - 1) do |j|
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    end
  end

  mid = size % 2 == 0 ? size / 2 - 1 : (size - 1) / 2
  0.upto(size - 1).each do |i|
    0.upto(mid).each do |j|
      matrix[i][j], matrix[i][size-1-j] = matrix[i][size-1-j], matrix[i][j]
    end
  end
end