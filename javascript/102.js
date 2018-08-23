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
var levelOrder = function(root) {
  if (root === null) return [];

  let result = [];
  let array = [root];
  while(array.length > 0) {
    result.push(array.map(function(node){ return node.val; }));
    let nextArray = [];
    array.forEach(function(node) {
      if (node.left) nextArray.push(node.left);
      if (node.right) nextArray.push(node.right);
    });
    array = nextArray;
  }

  return result;
};