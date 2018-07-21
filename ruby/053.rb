# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  return 0 if nums.length == 0
  max_sum = nums[0]
  current_sum = 0
  nums.each do |num|
    current_sum = 0 if current_sum < 0
    current_sum += num
    max_sum = current_sum if current_sum > max_sum
  end

  max_sum
end