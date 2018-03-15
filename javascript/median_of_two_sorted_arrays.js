/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort(function(a, b) { return a - b; });
  const length = nums1.length + nums2.length;
  if (length % 2 === 0) {
    return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  } else {
    return nums[(length - 1) / 2];
  }
};