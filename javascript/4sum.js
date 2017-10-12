/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort(function(a, b) { return a - b; }); 

  var result = [];
  var length = nums.length;
  var lastFirstValue = nums[0] - 1;
  for(var i = 0; i < length - 3; ++i) {
    if (nums[i] === lastFirstValue) continue;
    lastFirstValue = nums[i];

    var lastSecondValue = nums[i + 1] - 1;
    for (var j = i + 1; j < length - 2; ++j) {
      if (nums[j] === lastSecondValue) continue;
      lastSecondValue = nums[j];

      var leftTarget = target - nums[i] - nums[j];
      var k = j + 1;
      var l = length - 1;
      while(j < k && k < l && l < length) {
        var currentTarget = nums[k] + nums[l];
        if (currentTarget === leftTarget) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          var currentKValue = nums[k];
          while(++k < l && nums[k] === currentKValue){};
        } else if (currentTarget < leftTarget) {
          ++k;
        } else {
          --l;
        }
      }
    }
  }

  return result;
};