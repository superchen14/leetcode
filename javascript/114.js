/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return;

  const getRightMostNode = node => node.right ? getRightMostNode(node.right) : node;

  if (root.left) {
    leftNode = root.left;
    root.left = null;
    getRightMostNode(leftNode).right = root.right;
    root.right = leftNode;
  }
  flatten(root.right);
};