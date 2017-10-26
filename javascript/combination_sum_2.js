/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort(function(a, b) {return a - b;});

  var results = [];
  var result = [];
  function findResults(startIndex, target) {
    if (target === 0) results.push(result.slice(0));
    if (target < 0) return;
    if (startIndex === candidates.length) return;

    for (var i = startIndex; i < candidates.length; ++i) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      result.push(candidates[i]);
      findResults(i + 1, target - candidates[i]);
      result.pop();
    }
  }

  findResults(0, target);
  return results;
};