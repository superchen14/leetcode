/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let cache = {};
  for (let length1 = 0; length1 <= s1.length; ++length1) {
    cache[length1] = {};
  }

  for (let length1 = 0; length1 <= s1.length; ++length1) {
    for (let length2 = 0; length2 <= s2.length; ++length2) {
      if (length1 === 0 && length2 === 0) {
        cache[length1][length2] = true;
        continue;
      }
      if (length1 === 0) {
        cache[length1][length2] = cache[length1][length2 - 1] && s2[length2 - 1] === s3[length2 - 1];
        continue;
      }
      if (length2 === 0) {
        cache[length1][length2] = cache[length1 - 1][length2] && s1[length1 - 1] === s3[length1 - 1];
        continue;
      }

      // length1 > 0 and length2 > 0
      cache[length1][length2] = (cache[length1 - 1][length2] && s1[length1 - 1] === s3[length1 + length2 - 1])
      || (cache[length1][length2 - 1] && s2[length2 - 1] === s3[length1 + length2 - 1]);
    }
  }

  return cache[s1.length][s2.length];
};