/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const map = {"-1": {hasSolution: true, solutions:[[]]}};
  const maxWordLength = Math.max(...wordDict.map(word => word.length));
  for (let i = 0; i < s.length; ++i) {
    let hasSolution = false;
    let solutions = [];
    wordDict.forEach(word => {
      if (i + 1 >= word.length && map[i - word.length].hasSolution && s.substring(i - word.length + 1, i + 1) === word) {
        hasSolution = true;
        solutions.push(...map[i - word.length].solutions.map(solution => solution.concat(word)));
      }
    });
    map[i] = {hasSolution, solutions};
    if (i > maxWordLength) { delete map[i - maxWordLength - 1]; }
  }

  return map[s.length - 1].solutions.map(solution => solution.join(" "));
};