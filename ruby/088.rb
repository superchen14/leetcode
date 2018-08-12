# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
  last = m + n - 1
  m -= 1
  n -= 1

  while m >= 0 && n >= 0 do
    if nums1[m] > nums2[n]
      nums1[last] = nums1[m]
      m -= 1
    else
      nums1[last] = nums2[n]
      n -= 1
    end
    last -= 1
  end

  n.downto(0) do |i|
    nums1[last] = nums2[i]
    last -= 1
  end
end