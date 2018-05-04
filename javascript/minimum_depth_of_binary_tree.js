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
var minDepth = function(root) {
  if (root === null) return 0;

  let currentNodes = [root];
  let nextNodes = [];
  let minDepth = 1;
  while(currentNodes.length !== 0) {
    for(let i = 0; i < currentNodes.length; ++i) {
      let node = currentNodes[i];
      if (node.left || node.right) {
        node.left && nextNodes.push(node.left);
        node.right && nextNodes.push(node.right);
      } else {
        return minDepth;
      }
    }

    ++minDepth;
    currentNodes = nextNodes;
    nextNodes = [];
  }

  return minDepth;
};