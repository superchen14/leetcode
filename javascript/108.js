/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const midIndex = Number.parseInt(nums.length / 2);
  const returnValue = new TreeNode(nums[midIndex]);
  returnValue.left = sortedArrayToBST(nums.slice(0, midIndex));
  returnValue.right = sortedArrayToBST(nums.slice(midIndex + 1, nums.length));

  return returnValue;
};