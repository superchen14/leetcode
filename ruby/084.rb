# @param {Integer[]} heights
# @return {Integer}
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