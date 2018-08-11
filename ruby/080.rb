# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  current = 0
  current_value = nums[0]
  current_count = 0
  0.upto(nums.length - 1) do |i|
    if nums[i] == current_value
      if current_count < 2
        nums[current] = nums[i]
        current_count += 1
        current += 1
      end
    else
      current_value = nums[i]
      current_count = 1
      nums[current] = current_value
      current += 1
    end
  end
  current
end