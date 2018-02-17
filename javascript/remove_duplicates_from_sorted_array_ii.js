/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = 0;
  let count = 0;
  let currentValue = "*";
  let currentIndex = 0;
  let writeIndex = 0;
  while(currentIndex < nums.length) {
    const num = nums[currentIndex++];
    if (num === currentValue) {
      ++count;
    } else {
      result += (count >= 2 ? 2 : count);
      count = 1;
      currentValue = num;
    }
    if (count <= 2) {
      nums[writeIndex++] = num;
    }
  }
  result += (count >= 2 ? 2 : count);

  return result;
};