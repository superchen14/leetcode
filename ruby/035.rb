# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  return 0 if target <= nums[0]
  return nums.length if target > nums[-1]

  i = 1
  while nums[i] < target do
    i += 1
  end

  i
end