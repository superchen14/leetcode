/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") return true;

  var map = {};
  map["["] = "]";
  map["{"] = "}";
  map["("] = ")";
  function isLeft(c) { return c === '[' || c === '{' || c === '('; }
  function isMatch(c1, c2) {
    return map[c1] === c2;
  }

  var stack = [];
  for (var i = 0; i < s.length; ++i) {
    var c = s[i];
    if (isLeft(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;
      var last = stack.pop();
      if (!isMatch(last, c)) return false;
    }
  }

  return stack.length === 0;
};