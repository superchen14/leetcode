/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b) {return a-b;});

  let closestTarget = Number.MAX_VALUE;
  let delta = Number.MAX_VALUE;
  for(let i = 0; i < nums.length - 2; ++i) {
    let j = i + 1;
    let k = nums.length - 1;
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