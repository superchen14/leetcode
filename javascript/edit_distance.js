/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const length1 = word1.length;
  const length2 = word2.length;

  const map = {};
  for (let i = 0; i <= length1; ++i) {
    map[(length2 + 1) * i] = i;
  }

  for (let j = 0; j <= length2; ++j) {
    map[j] = j;
  }

  for (let i = 1; i <= length1; ++i) {
    for (let j = 1; j <= length2; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        map[i * (length2 + 1) + j] = map[(i - 1) * (length2 + 1) + j - 1];
      } else {
        const a = map[(i - 1) * (length2 + 1) + j - 1];
        const b = map[(i - 1) * (length2 + 1) + j];
        const c = map[i * (length2 + 1) + j - 1];
        map[i * (length2 + 1) + j] = Math.min(a, b, c) + 1;
      }
    }
  }

  return map[(length1 + 1) * (length2 + 1) - 1];
};