/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort(function (a, b) { return a - b; });

  var results = [];
  var result = [];
  findResults = function(startIndex, target) {
    if (startIndex === candidates.length) return;
    if (target < 0) return;
    if (target === 0) results.push(result.slice(0));

    for (var i = startIndex; i < candidates.length; ++i) {
      result.push(candidates[i]);
      findResults(i, target - candidates[i]);
      result.pop();
    }
  };

  findResults(0, target);
  return results;
};