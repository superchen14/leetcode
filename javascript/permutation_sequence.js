/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let candidates = [];
  for (let i = 1; i <= n; ++i) {
    candidates.push(i);
  }

  const factorial = n => {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
  }

  let result = "";
  let count = n;
  while(candidates.length > 0) {
    const count_factorial = factorial(count - 1);
    const index = parseInt((k - 1) / count_factorial);
    result = result + candidates[index];
    candidates.splice(index, 1);
    k = k - index * count_factorial;
    --count;
  }

  return result;
};

getPermutation(1, 1);