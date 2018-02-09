/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const length = nums.length;
  let sum = nums[length - 1];
  let maxSum = nums[length - 1];
  let i = length - 2;
  while(i >= 0) {
    sum = Math.max(nums[i], nums[i] + sum);
    maxSum = Math.max(sum, maxSum);
    --i;
  }

  return maxSum;
};