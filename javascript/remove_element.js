/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let last = nums.length - 1;
  for (let i = last; i >= 0; --i) {
    if (nums[i] !== val) continue;

    if (i === last) {
      --last;
    } else {
      nums[i] = nums[last];
      nums[last] = val;
      --last;
    }
  }
  
  return last + 1;
};