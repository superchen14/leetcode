/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const generateParenthesisSet = function(n) {
    if (n === 1) return {"()": true};
    const set = generateParenthesisSet(n - 1);
    const newSet = {};
    for (var str in set) {
      for (var i = 0; i < str.length; ++i) {
        if (str[i] === "(") {
          newSet[str.substring(0, i + 1) + "()" + str.substring(i + 1)] = true;
          newSet[str.substring(0, i) + "()" + str.substring(i)] = true;
        }
      }
    }

    return newSet;
  }

  return Object.keys(generateParenthesisSet(n));
};