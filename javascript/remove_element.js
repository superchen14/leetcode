/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var last = nums.length - 1;
  for (var i = last; i >= 0; --i) {
    if (nums[i] === val && i === last) {
      --last;
      continue;
    }

    if (nums[i] === val) {
      nums[i] = nums[last];
      nums[last] = val;
      --last;
    }
  }
  
  return last + 1;
};