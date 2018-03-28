/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);

  let results = [];
  let result = [];
  const findResults = (startIndex, target) => {
    if (target === 0) {
      results.push(result.slice(0));
      return;
    }
    if (target < 0) return;
    if (startIndex === candidates.length) return;

    for (let i = startIndex; i < candidates.length; ++i) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      result.push(candidates[i]);
      findResults(i + 1, target - candidates[i]);
      result.pop();
    }
  };
  findResults(0, target);

  return results;
};