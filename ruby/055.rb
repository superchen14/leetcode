# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
  target = nums.length - 1
  range_start = 0
  range_end = 0
  while true do
    return true if range_end >= target
    next_end = range_end
    range_start.upto(range_end).each do |i|
      current_target = i + nums[i]
      next_end = current_target if current_target > next_end
    end
    return false if next_end == range_end
    range_start = range_end + 1
    range_end = next_end
  end
end