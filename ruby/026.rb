# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  return 0 if nums.length == 0

  used_value = nums[0] - 1
  insert_index = 0
  0.upto(nums.length - 1) do |i|
    if nums[i] != used_value
      nums[insert_index] = nums[i]
      insert_index += 1
      used_value = nums[i]
    end
  end

  insert_index
end