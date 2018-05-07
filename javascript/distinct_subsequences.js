/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (t.length === 0 || s.length === 0) return 0;

  const sLength = s.length;
  const tLength = t.length;
  const map = [];
  for (let i = 0; i < sLength; ++i) {
    for (let j = 0; j < tLength; ++j) {
      if (i < j) {
        map[i * tLength + j] = 0;
        continue;
      }

      if (j === 0) {
        if (i === 0) {
          map[0] = s[0] === t[0] ? 1 : 0;
        } else {
          map[i * t.length] = map[(i - 1) * tLength] + (s[i] === t[0] ? 1 : 0);
        }
        continue;
      }

      if (s[i] === t[j]) {
        map[i * tLength + j] = map[(i - 1) * tLength + j] + map[(i - 1) * tLength + j - 1];
      } else {
        map[i * tLength + j] = map[(i - 1) * tLength + j];
      }
    }
  }

  return map[sLength * tLength - 1];
};