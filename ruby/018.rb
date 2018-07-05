# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[][]}
def four_sum(nums, target)
  return [] if nums.length < 4

  nums.sort!

  results = []
  0.upto(nums.length - 4).each do |i|
    (i + 1).upto(nums.length - 3) do |j|
      k = j + 1
      l = nums.length - 1

      while(k < l) do
        current_sum = nums[i] + nums[j] + nums[k] + nums[l]
        if current_sum == target
          results.push([nums[i], nums[j], nums[k], nums[l]])
          current_k_value = nums[k]
          while nums[k + 1] == current_k_value && k < l do
            k += 1
          end
          k += 1
        elsif current_sum > target
          l -= 1
        else
          k += 1
        end
      end
    end
  end

  results.uniq
end