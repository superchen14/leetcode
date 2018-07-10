/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  
  var i = 1;
  while(target > nums[i]) { ++i; }
  
  return i;
};