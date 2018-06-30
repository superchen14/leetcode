/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var isMatchInternal = function(i, j) {
    if (j === p.length) return i === s.length;

    if (j === p.length - 1 || p[j + 1] !== "*") {
      if (i === s.length) return false;
      if (p[j] !== s[i] && p[j] !== ".") return false;
      return isMatchInternal(i + 1, j + 1);
    }

    // if code comes here p[j + 1] === "*"
    while(i < s.length && (p[j] === "." || p[j] === s[i])){
      if (isMatchInternal(i, j + 2)) return true;
      ++i;
    }

    return isMatchInternal(i, j + 2);
  };

  return isMatchInternal(0, 0);
};