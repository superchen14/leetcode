/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function(a, b) { return a - b; }); 

  let result = [];
  const length = nums.length;
  let lastFirstValue = nums[0] - 1;
  for(var i = 0; i < length - 3; ++i) {
    if (nums[i] === lastFirstValue) continue;
    lastFirstValue = nums[i];

    let lastSecondValue = nums[i + 1] - 1;
    for (var j = i + 1; j < length - 2; ++j) {
      if (nums[j] === lastSecondValue) continue;
      lastSecondValue = nums[j];

      const leftTarget = target - nums[i] - nums[j];
      let k = j + 1;
      let l = length - 1;
      while(j < k && k < l && l < length) {
        let currentTarget = nums[k] + nums[l];
        if (currentTarget === leftTarget) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          const currentKValue = nums[k];
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