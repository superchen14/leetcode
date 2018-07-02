# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  nums.sort!

  closest_sum = nil
  i = 0
  while i < nums.length do
    j = i + 1
    k = nums.length - 1
    while j < k do
      sum = nums[i] + nums[j] + nums[k]

      return sum if sum == target

      if closest_sum.nil?
        closest_sum = sum
        next
      end

      if (sum - target).abs < (closest_sum - target).abs
        closest_sum = sum
      end

      if sum > target
        k -= 1
      else
        j += 1
      end
    end

    i += 1
  end
  closest_sum
end