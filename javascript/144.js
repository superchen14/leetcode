/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  while(queue.length > 0) {
    let node = queue.shift();
    result.push(node.val);
    node.right && queue.unshift(node.right);
    node.left && queue.unshift(node.left);
  }

  return result;
};