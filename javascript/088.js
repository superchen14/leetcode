/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var index = m + n - 1;
  var current1 = m - 1;
  var current2 = n - 1;

  while(current1 >= 0 && current2 >= 0) {
    var value1 = nums1[current1];
    var value2 = nums2[current2];
    if (value1 < value2) {
      nums1[index] = value2;
      --index;
      --current2;
    } else {
      nums1[index] = value1;
      --index;
      --current1;
    }
  }

  while(current2 >= 0) {
    nums1[index] = nums2[current2];
    --index;
    --current2;
  }
};