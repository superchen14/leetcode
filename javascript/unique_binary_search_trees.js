/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let cache = {0: 1, 1: 1};

  const getNum = n => {
    if (n in cache) return cache[n];

    if (n === 1 || n === 0) return 1;
    if (n < 0) return 0;

    let temp = 0;
    let result = 0;
    while(temp < n) {
      result += getNum(temp) * getNum(n - temp - 1);
      ++temp;
    }

    cache[n] = result;
    return result;
  }

  return getNum(n);
};