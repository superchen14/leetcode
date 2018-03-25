/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const binarySearch = (start, end) => {
    // TODO: should use truely binary search implementation
    if (start === end) return -1;
    if (start + 1 === end) return nums[start] === target;
    if (target < nums[start]) return -1;
    if (target > nums[end - 1]) return -1;
    for (let i = start; i < end; ++i) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  const _search = (start, end) => {
    if (start === end) return -1;
    if (start + 1 === end) return nums[start] === target ? start : -1;
    if (nums[start] < nums[end - 1]) {
      // start to end is sorted sub-array
      return binarySearch(start, end);
    } else {
      // start to end is rotated sub-array
      const mid = Number.parseInt((start + end) / 2);
      if (target === nums[mid]) return mid;
      const index1 = _search(start, mid);
      if (index1 !== -1) return index1;
      return _search(mid + 1, end);
    }
  }

  return _search(0, nums.length);
};