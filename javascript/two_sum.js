/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; ++i) {
    const currentNum = nums[i];
    const matchNum = target - currentNum;
    if (map[matchNum]) {
      return [map[matchNum], i];
    } else {
      map[currentNum] = i;
    }
  }
};

twoSum([3,2,4], 6);