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
  list = [root];
  root.sum = root.val;
  while(list.length > 0) {
    node = list.shift();
    if (node.left === null && node.right === null) {
      result += node.sum;
    } else {
      if (node.left) {
        node.left.sum = node.sum * 10 + node.left.val;
        list.push(node.left);
      }

      if (node.right) {
        node.right.sum = node.sum * 10 + node.right.val;
        list.push(node.right);
      }
    }
  }
  return result;
};