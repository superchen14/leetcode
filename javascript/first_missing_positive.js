/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var i = 0;
  var n = nums.length;
  while(i < n) {
    if (nums[i] > n || nums[i] <= 0 || nums[i] === i + 1 || nums[i] === nums[nums[i] - 1]) {
      ++i;
    } else {
      var temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  i = 0;
  while(i < n) {
    if (nums[i] !== i + 1) return i + 1;
    ++i;
  }

  return n + 1;
};

firstMissingPositive([1,1]);