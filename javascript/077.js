/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var cache = {};
var combine = function(n, k) {
  if (cache[n + ";" + k]) return cache[n + ";" + k];
  if (k === 0) return [[]];
  if (k === n) {
    var fullList = [];
    for(var i = 1; i <= n; ++i) {
      fullList.push(i);
    }
    return [fullList];
  }

  var results1 = cache[(n - 1) + ";" + k] || combine(n - 1, k);
  var results2 = cache[(n - 1) + ";" + (k - 1)] || combine(n - 1, k - 1);
  var patchedResults2 = [];
  results2.forEach(function(result){
    patchedResults2.push(result.concat([n]));
  });

  results = results1.concat(patchedResults2);
  cache[n + ";" + k] = results;
  return results;
};