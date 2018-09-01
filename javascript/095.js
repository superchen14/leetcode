/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const _generateTrees = (a, b) => {
    if (a === b) return [new TreeNode(a)];
    if (a > b) return [];

    let results = [];
    let temp = a;
    while(temp <= b) {
      const leftResults = _generateTrees(a, temp - 1);
      const rightResults = _generateTrees(temp + 1, b);

      if (leftResults.length === 0) {
        rightResults.forEach(rightResult => {
          let root = new TreeNode(temp);
          root.right = rightResult;
          results.push(root);
        });
      } else if (rightResults.length === 0) {
        leftResults.forEach(leftResult => {
          let root = new TreeNode(temp);
          root.left = leftResult;
          results.push(root);
        });
      } else {
        for(let i = 0; i < leftResults.length; ++i) {
          for (let j = 0; j < rightResults.length; ++j) {
            let root = new TreeNode(temp);
            root.left = leftResults[i];
            root.right = rightResults[j];
            results.push(root);
          }
        }
      }
      ++temp;
    }
    return results;
  };
  return _generateTrees(1, n);
};