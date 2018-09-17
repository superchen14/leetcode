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
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const postOrderTraversal = node => {
    if (node.left === null && node.right === null) {
      node.currentSum = node.val;
      node.parentSum = node.val;
      if (node.currentSum > maxSum) maxSum = node.currentSum;
      return;
    }
    node.left && postOrderTraversal(node.left);
    node.right && postOrderTraversal(node.right);

    if (node.left === null && node.right) {
      node.currentSum = node.val + Math.max(0, node.right.parentSum);
      node.parentSum = node.currentSum;
      if (node.currentSum > maxSum) maxSum = node.currentSum;
      return;
    }

    if (node.left && node.right === null) {
      node.currentSum = node.val + Math.max(0, node.left.parentSum);
      node.parentSum = node.currentSum;
      if (node.currentSum > maxSum) maxSum = node.currentSum;
      return;
    }

    node.currentSum = node.val;
    if (node.left.parentSum > 0) node.currentSum += node.left.parentSum;
    if (node.right.parentSum > 0) node.currentSum += node.right.parentSum;
    node.parentSum = node.val + Math.max(0, node.left.parentSum, node.right.parentSum);
    if (node.currentSum > maxSum) maxSum = node.currentSum;
  }
  postOrderTraversal(root);

  return maxSum;
};