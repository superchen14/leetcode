# @param {Integer[]} height
# @return {Integer}
def trap(height)
  return 0 if height.length == 0

  max_height = 0
  max_index = -1
  height.each_with_index do |h, i|
    if h > max_height
      max_height = h
      max_index = i
    end
  end

  volume = 0
  current_max = 0
  0.upto(max_index).each do |i|
    if height[i] > current_max
      current_max = height[i]
    else
      volume += (current_max - height[i])
    end
  end

  current_max = 0
  (height.length - 1).downto(max_index).each do |i|
    if height[i] > current_max
      current_max = height[i]
    else
      volume += (current_max - height[i])
    end
  end

  volume
end