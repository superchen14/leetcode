/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const map = {"-1": true};

  for (let i = 0; i < s.length; ++i) {
    let hasSolution = false;
    wordDict.forEach(word => {
      if (i + 1 >= word.length) {
        if (s.substring(i - word.length + 1, i + 1) === word && map[i - word.length]) hasSolution = true;
      }
    });
    map[i] = hasSolution;
  }

  return map[s.length - 1];
};