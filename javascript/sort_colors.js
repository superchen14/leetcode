/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const RED = 0;
  const WHITE = 1;
  const BLUE = 2;

  let redIndex = 0;
  while(nums[redIndex] === RED) { ++redIndex; }

  let currentIndex = redIndex;

  let blueIndex = nums.length - 1;
  while(nums[blueIndex] === BLUE) { --blueIndex; }

  while(currentIndex <= blueIndex && redIndex < blueIndex) {
    if (currentIndex < redIndex) {
      ++currentIndex;
    }
    if (nums[currentIndex] === WHITE) {
      ++currentIndex;
    } else if (nums[currentIndex] === RED) {
      nums[currentIndex] = nums[redIndex];
      nums[redIndex++] = RED;
    } else {
      nums[currentIndex] = nums[blueIndex];
      nums[blueIndex--] = BLUE;
    }
    while(nums[redIndex] === RED) { ++redIndex; }
    while(nums[blueIndex] === BLUE) { --blueIndex; }
  }
};