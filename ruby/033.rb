# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_with_index(nums, start_index, end_index, target)
  if (start_index + end_index) % 2 == 0
    mid_index = (start_index + end_index) / 2
  else
    mid_index = (start_index + end_index - 1) / 2
  end

  return -1 if start_index > end_index
  return mid_index if nums[mid_index] == target
  return search_with_index(nums, mid_index + 1, end_index, target) if mid_index == start_index

  if nums[start_index] < nums[mid_index]
    # first part is ascending array
    if target < nums[mid_index] && target >= nums[start_index]
      search_with_index(nums, start_index, mid_index, target)
      start_index.upto(mid_index).each do |i|
        return i if nums[i] == target
      end
      return -1
    else
      search_with_index(nums, mid_index + 1, end_index, target)
    end
  else
    # second part is ascending array
    if target >= nums[mid_index + 1] && target <= nums[end_index]
      (mid_index + 1).upto(end_index).each do |i|
        return i if nums[i] == target
      end
      return -1
    else
      search_with_index(nums, start_index, mid_index, target)
    end
  end
end

def search(nums, target)
  start_index = 0
  end_index = nums.length - 1
  search_with_index(nums, start_index, end_index, target)
end