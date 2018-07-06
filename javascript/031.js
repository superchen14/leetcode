/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  const getMinIndex = start => {
    let minIndex = start;
    let minValue = nums[minIndex];
    for (let i = start + 1; i < nums.length; ++i) {
      if (nums[i] < minValue) minIndex = i;
    }

    return minIndex;
  }

  let i = nums.length - 1;

  while(i >= 0) {
    if (i == 0) i = -1;
    --i;
    if (nums[i] < nums[i + 1]) break;
  }

  // make i + 1 to end ascend
  for (let j = i + 1; j < nums.length - 1; ++j) {
    const minIndex = getMinIndex(j);
    if (minIndex !== j) swap(j, minIndex);
  }

  // find first index which value larger than nums[i] then swap
  for (let j = i + 1; j < nums.length; ++j) {
    if (nums[j] > nums[i]) {
      swap(i, j);
      break;
    }
  }
};