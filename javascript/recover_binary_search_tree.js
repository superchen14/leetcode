/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const inorderTraversal = root => {
    if (root === null) return [];
    return inorderTraversal(root.left).concat([root]).concat(inorderTraversal(root.right));
  }

  let error1 = null;
  let error2 = null;
  const list = inorderTraversal(root);
  for (let i = 0; i < list.length - 1; ++i) {
    const current = list[i];
    const next = list[i + 1];
    if (current.val > next.val) {
      if (error1 === null) {
        error1 = current;
        error2 = next;
      } else {
        error2 = next;
      }
    }
  }

  const temp = error1.val;
  error1.val = error2.val;
  error2.val = temp;
};