/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  
  var i = 0;
  while(true) {
      if (nums[i] === target) return i;
      if (nums[i + 1] < target) {
          ++i;
          continue;
      } else {
          break;
      }
  }
  
  return i + 1;
};