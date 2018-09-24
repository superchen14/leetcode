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
var postorderTraversal = function(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  while(queue.length > 0) {
    let obj = queue.shift();
    if (obj instanceof TreeNode) {
      queue.unshift(obj.val);
      obj.right && queue.unshift(obj.right);
      obj.left && queue.unshift(obj.left);
    } else {
      result.push(obj);
    }
  }

  return result;
};