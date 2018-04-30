/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return [];

  let currentArray = [root];
  let nextArray = [];
  let result = [];

  while(currentArray.length !== 0) {
    result.push(currentArray.map(node => node.val));
    currentArray.forEach(node => {
      node.left && nextArray.push(node.left);
      node.right && nextArray.push(node.right);
    });

    currentArray = nextArray;
    nextArray = [];
  }

  return result.reverse();
};