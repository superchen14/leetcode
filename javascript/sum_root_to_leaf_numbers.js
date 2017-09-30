/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (root === null) return 0;

  var result = 0;
  function dfs(node, baseSum) {
    if (node.left === null && node.right === null) {
      result += baseSum;
    }

    if (node.left) dfs(node.left, 10 * baseSum + node.left.val);
    if (node.right) dfs(node.right, 10 * baseSum + node.right.val);
  }

  dfs(root, root.val);
  return result;
};