/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length == 1) return [nums];
  nums = nums.sort((a, b) => a - b);

  let usedNums = [];
  let results = [];
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  for(var i = 0; i < nums.length; ++i) {
    if (usedNums.indexOf(nums[i]) !== -1) continue;

    usedNums.push(nums[i]);

    swap(0, i);
    var subResults = permuteUnique(nums.slice(1));
    for (let j = 0; j < subResults.length; ++j) {
      results.push([nums[0]].concat(subResults[j]));
    }
    swap(0, i);
  }

  return results;
};