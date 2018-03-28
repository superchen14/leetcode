/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);

  let results = [];
  let result = [];
  findResults = function(startIndex, target) {
    if (target === 0) {
      results.push(result.slice(0));
      return;
    }
    if (startIndex === candidates.length) return;
    if (target < 0) return;

    for (var i = startIndex; i < candidates.length; ++i) {
      result.push(candidates[i]);
      findResults(i, target - candidates[i]);
      result.pop();
    }
  };

  findResults(0, target);
  return results;
};