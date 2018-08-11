# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
  return [[], [nums[0]]] if nums.length == 1

  num = nums[-1]
  parent_result = subsets(nums[0...-1])
  parent_result + parent_result.map { |r| r.dup.push(num) }
end