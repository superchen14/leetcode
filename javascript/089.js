/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let n_2 = 1;
  let temp = n;
  while(temp > 1) {
    n_2 *= 2;
    --temp;
  }
  var subResults = grayCode(n - 1);
  var results = subResults.slice();
  return results.concat(subResults.reverse().map(r => r + n_2));
};