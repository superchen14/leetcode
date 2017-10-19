/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;

  if (target < nums[start] || target > nums[end]) return [-1, -1];

  var targetIndex = -1;
  do {
    if (nums[start] === target) {
      targetIndex = start;
      break;
    }

    if (nums[end] === target) {
      targetIndex = end;
      break;
    }

    var mid = Number.parseInt((start + end) / 2);
    if (nums[mid] === target) {
      targetIndex = mid;
      break;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }while(start < end - 1);

  if (targetIndex < 0) return [-1, -1];

  start = targetIndex;
  end = targetIndex;
  while(start > 0 && nums[start - 1] === target) { --start; }
  while(end < nums.length - 1 && nums[end + 1] === target) { ++end; }

  return [start, end];
};