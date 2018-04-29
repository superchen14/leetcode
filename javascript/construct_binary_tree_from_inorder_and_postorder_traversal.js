/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  if (inorder.length === 1) return new TreeNode(inorder[0]);

  const mid = postorder[postorder.length - 1];
  const index = inorder.indexOf(mid);

  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1, inorder.length);
  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(inorderLeft.length, postorder.length - 1);

  const returnValue = new TreeNode(mid);
  returnValue.left = buildTree(inorderLeft, postorderLeft);
  returnValue.right = buildTree(inorderRight, postorderRight);

  return returnValue;
};