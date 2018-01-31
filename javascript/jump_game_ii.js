/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) return 0;

  const maxIndex = nums.length - 1;
  let jumpTimes = 0;
  let index = 0;
  let maxReach = 0;
  let i = 0;
  while(maxReach < maxIndex) {
    // check [index, maxReach] can react maxIndex
    let nextMaxReach = maxReach;
    for(; i <= maxReach; ++i) {
      const currentReach = i + nums[i];
      if (currentReach > nextMaxReach) nextMaxReach = currentReach;
    }

    ++jumpTimes;
    maxReach = nextMaxReach;
  }

  return jumpTimes;
};