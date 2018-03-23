/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let current = 0;
  let index = 0;
  let lastValue = nums[0] - 1;

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