# @param {Integer[]} height
# @return {Integer}

def get_volumn(height, i, j)
  length = j - i
  if height[i] < height[j]
    length * height[i]
  else
    length * height[j]
  end
end

def max_area(height)
  i = 0
  j = height.length - 1

  max_volumn = get_volumn(height, i, j)
  while i < j do
    if height[i] < height[j]
      i_height = height[i]
      i += 1 while height[i] <= i_height && i < j
    else
      j_height = height[j]
      j -= 1 while height[j] <= j_height && i < j
    end

    break if i >= j

    new_volumn = get_volumn(height, i, j)
    max_volumn = new_volumn if new_volumn > max_volumn
  end

  max_volumn
end