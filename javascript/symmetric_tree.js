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
var isSymmetric = function(root) {
  if (root === null) return true;

  _isSymmetric = (rootA, rootB) => {
    if (rootA === null && rootB === null) return true;
    if (rootA === null || rootB === null) return false;
    if (rootA.val !== rootB.val) return false;

    return _isSymmetric(rootA.left, rootB.right) && _isSymmetric(rootA.right, rootB.left);
  }

  return _isSymmetric(root.left, root.right);
};