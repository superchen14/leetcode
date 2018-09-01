/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {};
  nums.forEach(num => {
    if (num in map) {
      delete map[num];
    } else {
      map[num] = true;
    }
  });

  return Number.parseInt(Object.keys(map)[0]);
};