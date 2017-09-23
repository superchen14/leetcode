/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var generateParenthesisSet = function(n) {
    if (n === 1) return {"()": true};
    var set = generateParenthesisSet(n - 1);
    var newSet = {};
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

  var set = generateParenthesisSet(n);
  var result = [];
  for (var str in set) {
    result.push(str);
  }

  return result;
};