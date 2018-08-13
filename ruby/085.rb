def largest_rectangle_area(heights)
  result = 0

  past_heights = []
  heights.each do |height|
    if past_heights.length == 0 || past_heights[-1] <= height
      past_heights.push(height)
    else
      count = 0
      while past_heights.length > 0 && past_heights[-1] > height do
        count += 1
        h = past_heights.pop
        result = h * count if h * count > result
      end

      (count + 1).times do
        past_heights.push(height)
      end
    end
  end

  0.upto(past_heights.length - 1) do |i|
    value = past_heights[i] * (past_heights.length - i)
    result = value if value > result 
  end

  result
end

# @param {Character[][]} matrix
# @return {Integer}
def maximal_rectangle(matrix)
  return 0 if matrix.length == 0
  return 0 if matrix[0].length == 0

  result = 0
  col_count = matrix[0].length
  1.upto(matrix.length) do |row_count|
    heights = []
    0.upto(col_count) do |col|
      values = []
      0.upto(row_count - 1) do |row|
        values.push(matrix[row][col])
      end
      height = 0
      while values.length > 0 && values[-1] == "1"
        height += 1
        values.pop
      end
      heights.push(height)
    end
    sub_result = largest_rectangle_area(heights)
    result = sub_result if sub_result > result
  end

  result
end