/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) return [[]];
  var previousSubsets = subsets(nums.slice(0, nums.length - 1));

  var lastNum = nums[nums.length - 1];
  var patchedPreviousSubsets = previousSubsets.map(function(subset){ return subset.concat([lastNum]); });
  return previousSubsets.concat(patchedPreviousSubsets);
};