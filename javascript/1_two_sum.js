/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var valuePosMap = {};
  for (var index = 0; index < nums.length; ++index) {
    var currentValue = nums[index];
    var otherValue = target - currentValue;
    var posOfOtherValue = valuePosMap[otherValue];
    if (posOfOtherValue != undefined) {
      return [posOfOtherValue, index];
    }

    valuePosMap[currentValue] = index;
  }
};