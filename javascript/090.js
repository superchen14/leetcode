/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort();
  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [[], nums];

  let previousNums = nums.slice(0, nums.length - 1);
  let previousSubsets = subsetsWithDup(previousNums);

  const lastNum = nums[nums.length - 1];
  if (lastNum !== nums[nums.length - 2]) {
    return previousSubsets.concat(previousSubsets.map(subset => subset.concat(lastNum)));
  } else {
    let index = 0;
    while(nums[index] !== lastNum) ++index; // if lastNum is 5, find index of first 5 
    const count = nums.length - index;  // if lastNum is 5, how many 5 in nums
    const subSubsets = subsetsWithDup(nums.slice(0, index));
    return previousSubsets.concat(subSubsets.map(subSubset => subSubset.concat( (new Array(count)).fill(lastNum)  )));
  }
};