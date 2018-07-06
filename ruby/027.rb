# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  insert_index = 0
  0.upto(nums.length - 1).each do |i|
    if nums[i] != val
      nums[insert_index] = nums[i]
      insert_index += 1
    end
  end
  insert_index
end