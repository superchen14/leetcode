/**
 * @param {string} digits
 * @return {string[]}
 */
var mapping = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) return mapping[digits[0]];

  var results = [];
  var partialResults = letterCombinations(digits.substring(1));
  mapping[digits[0]].forEach(function(digit) {
    partialResults.forEach(function(partialResult) {
      results.push(digit + partialResult);
    });
  });

  return results;
};