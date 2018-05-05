/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) return [];

  const results = [];
  const currentPath = [root.val];
  let currentSum = root.val;

  const isLeaf = node => node.left === null && node.right === null;

  const dfs = node => {
    if (isLeaf(node)) {
      if (currentSum === sum) {
        results.push(currentPath.slice(0));
      }
    } else {
      if (node.left) {
        currentPath.push(node.left.val);
        currentSum += node.left.val;
        dfs(node.left);
        currentSum -= node.left.val;
        currentPath.pop();
      }

      if (node.right) {
        currentPath.push(node.right.val);
        currentSum += node.right.val;
        dfs(node.right);
        currentSum -= node.right.val;
        currentPath.pop();
      }
    }
  }
  dfs(root);

  return results;
};