/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root === null) return;

  let currentList = [root];
  let nextList = [];

  while(currentList.length > 0) {
    for(var i = 0; i < currentList.length; ++i) {
      if (i !== currentList.length - 1) {
        currentList[i].next = currentList[i + 1];
      }
    }

    currentList.forEach(node => {
      node.left && nextList.push(node.left);
      node.right && nextList.push(node.right);
    });

    currentList = nextList;
    nextList = [];
  }
};