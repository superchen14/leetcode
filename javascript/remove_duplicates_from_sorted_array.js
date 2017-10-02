/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  var current = 0;
  var index = 0;
  var lastValue = nums[0] - 1;

  while(index < nums.length) {
    if (nums[index] !== lastValue) {
      nums[current] = nums[index];
      lastValue = nums[current];
      ++current;
      ++index;
    } else {
      ++index;
    }
  }

  return current;
};