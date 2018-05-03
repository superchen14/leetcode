/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const getHeight = node => {
    if (node === null) return 0;
    if (node.height) return node.height;
    const height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    node.height = height;
    return height;
  }

  if (root === null) return true;
  leftHeight = getHeight(root.left);
  rightHeight = getHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};