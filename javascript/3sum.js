/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort(function(a, b) { return a - b; });

  var result = [];
  var length = nums.length;
  var lastValue = nums[0] - 1;
  for(var i = 0; nums[i] <= 0; ++i) {
    if (nums[i] === lastValue) continue;
    lastValue = nums[i];

    var j = i + 1;
    var k = length - 1;
    var target = -nums[i];
    while(i < j && j < k && k < length) {
      var currentTarget = nums[j] + nums[k];
      if (currentTarget === target) {
        result.push([nums[i], nums[j], nums[k]]);
        var currentJValue = nums[j];
        while(++j < k && nums[j] === currentJValue){};
        continue;
      } else if (currentTarget > target) {
        --k;
      } else {
        ++j;
      }
    }
  }

  return result;
};