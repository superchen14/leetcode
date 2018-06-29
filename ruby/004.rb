# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
  nums = nums1 + nums2
  nums.sort!

  if nums.length % 2 == 0
    mid1 = nums[nums.length / 2]
    mid2 = nums[nums.length / 2 - 1]
    (mid1 + mid2) / 2.0
  else
    nums[(nums.length - 1) / 2]
  end
end