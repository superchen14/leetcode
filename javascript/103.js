/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) return [];

  let result = [];
  let array = [root];
  let needReverse = false;
  while(array.length !== 0) {
    let values = array.map(node => node.val);
    if (needReverse) values.reverse();
    result.push(values);

    let nextArray = [];
    array.forEach(node => {
      node.left && nextArray.push(node.left);
      node.right && nextArray.push(node.right);
    });

    needReverse = !needReverse;
    array = nextArray;
  }

  return result;
};