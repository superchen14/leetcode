# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
  length = nums.length
  0.upto(length - 1).each do |i|
    next if nums[i] > length || nums[i] <= 0
    while true do
      break if nums[i] > length || nums[i] <= 0
      target_index = nums[i] - 1
      break if target_index == i
      break if nums[i] == nums[target_index]
      nums[i], nums[target_index] = nums[target_index], nums[i]
    end
  end

  result = 1
  while nums[result - 1] == result do
    result += 1
  end
  
  result
end