/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);

  const mid = preorder[0];
  const index = inorder.indexOf(mid);
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1, inorder.length);
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  const preorderRight = preorder.slice(inorderLeft.length + 1, preorder.length);

  const returnValue = new TreeNode(mid);
  returnValue.left = buildTree(preorderLeft, inorderLeft);
  returnValue.right = buildTree(preorderRight, inorderRight);
  return returnValue;
};