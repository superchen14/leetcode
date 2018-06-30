/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  const length = nums.length;
  let lastValue = nums[0] - 1;
  for(var i = 0; nums[i] <= 0; ++i) {
    if (nums[i] === lastValue) continue;
    lastValue = nums[i];

    let j = i + 1;
    let k = length - 1;
    const target = -nums[i];
    while(i < j && j < k && k < length) {
      const currentTarget = nums[j] + nums[k];
      if (currentTarget === target) {
        result.push([nums[i], nums[j], nums[k]]);
        const currentJValue = nums[j];
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