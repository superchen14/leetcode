# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
  nums.sort!

  results = []
  i = 0
  while i < nums.length do
    j = i + 1
    k = nums.length - 1
    break if j >= k
    target = -nums[i]
    break if target < 0
    while j < k do
      current_target = nums[j] + nums[k]
      if current_target == target
        results.push([nums[i], nums[j], nums[k]])
        while nums[j + 1] == nums[j] && j < k do
          j += 1
        end
        j += 1
      elsif current_target > target
        k -= 1
      else
        j += 1
      end
    end

    while nums[i + 1] == nums[i] && i < nums.length do
      i += 1
    end
    i += 1
  end

  results
end