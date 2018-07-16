# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
  return [] if nums.length == 0
  return [[nums[0]]] if nums.length == 1

  result = []
  value = nums.pop
  parent_result = permute(nums)
  parent_result.map do |item|
    0.upto(item.length).map do |i|
      item.dup.insert(i, value)
    end
  end.reduce([], :+)
end