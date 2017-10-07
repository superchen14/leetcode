/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(a, b) {return a-b;});

  var closestTarget = Number.MAX_VALUE;
  var delta = Number.MAX_VALUE;
  for(var i = 0; i < nums.length - 2; ++i) {
    var j = i + 1;
    var k = nums.length - 1;
    while(j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < delta) {
        closestTarget = sum;
        delta = Math.abs(sum - target);
      }
      if (sum > target) {
        --k;
      } else if(sum < target) {
        ++j;
      } else {
        return target;
      }
    }
  }

  return closestTarget;
};