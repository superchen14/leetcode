/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const sLength = s.length;
  const tLength = t.length;

  if (sLength === 0) return 0;
  if (tLength === 0) return 0;

  const map = (new Array(sLength));
  for (let i = 0; i < s.length; ++i) { map[i] = [] }
  for(let i = 0; i < sLength; ++i) {
    for (let j = 0; j < tLength; ++j) {
      if (i < j) {
        map[i][j] = 0;
        continue;
      }

      if (i === 0) {
        map[i][j] = s[i] === t[j] ? 1 : 0;
        continue;
      }

      if (j === 0) {
        map[i][j] = map[i - 1][j] + (s[i] === t[j] ? 1 : 0);
        continue;
      }

      let sum = map[i - 1][j];
      if (s[i] === t[j]) {
        sum += map[i - 1][j - 1];
      }
      map[i][j] = sum;
    }
  }

  return map[sLength - 1][tLength - 1];
};