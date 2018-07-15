def jump_range(nums, start, last)
  next_start = last + 1
  next_end = last + 1
  start.upto(last) do |i|
    next_end = nums[i] + i if nums[i] + i > next_end
  end

  if next_end >= nums.length - 1
    return 1
  else
    return jump_range(nums, next_start, next_end) + 1
  end
end

# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
  return 0 if nums.length == 1
  jump_range(nums, 0, 0)
end