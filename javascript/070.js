/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  fibonacci = [];
  
  for (var i = 1; i <= n; ++i) {
      if (i === 1) { fibonacci.push(1); continue; }
      if (i === 2) { fibonacci.push(2); continue; }
      fibonacci.push(fibonacci[i - 3] + fibonacci[i - 2]);
  }
  return fibonacci[n - 1];
};