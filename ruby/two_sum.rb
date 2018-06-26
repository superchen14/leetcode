# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  hash = {}
  result = nil
  nums.each_with_index do |num, index|
    if hash[num].nil?
      hash[target - num] = index
    else
      result = [hash[num], index]
    end
  end
  result
end