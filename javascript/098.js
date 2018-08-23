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
var isValidBST = function(root) {
  if (root == null) return true;

  if (root.left === null && root.right === null) return true;
  if (root.left !== null && root.right === null) {
    return getMaxValue(root.left) < root.val && isValidBST(root.left);
  }

  if (root.left === null && root.right !== null) {
    return getMinValue(root.right) > root.val && isValidBST(root.right);
  }

  return getMaxValue(root.left) < root.val && isValidBST(root.left) && 
  getMinValue(root.right) > root.val && isValidBST(root.right);
};

function getMaxValue(node) {
  var maxValue = node.val;
  while(node.right !== null) {
    node = node.right;
    maxValue = node.val;
  }

  return maxValue;
}

function getMinValue(node) {
  var minValue = node.val;
  while(node.left !== null) {
    node = node.left;
    minValue = node.val;
  }

  return minValue;
}