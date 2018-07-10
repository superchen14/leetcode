# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
  first_index = nums.index(target)
  return [-1, -1] if first_index.nil?

  second_index = first_index
  while second_index < nums.length && nums[second_index + 1] == target do
    second_index += 1
  end
  [first_index, second_index]
end

search_range([1, 2, 2, 3], 4)