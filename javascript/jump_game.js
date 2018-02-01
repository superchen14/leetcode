/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1) return true;

  const lastIndex = nums.length - 1;
  let maxReach = 0;
  let i = 0;
  while(true) {
    // get the next max reach of [currentIndex, maxReach]
    let nextReach = maxReach;
    for(; i <= maxReach; ++i) {
      const currentReach = nums[i] + i;
      if (currentReach >= lastIndex) return true;
      if (currentReach > nextReach) {
        nextReach = currentReach;
      }
    }
    if (nextReach <= maxReach) return false;
    maxReach = nextReach;
  }
};