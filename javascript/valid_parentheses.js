/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") return true;

  const isLeft = c => c === '[' || c === '{' || c === '(';
  const map = {"[": "]", "{": "}", "(":")"};
  const isMatch = (c1, c2) => map[c1] === c2;

  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (isLeft(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (!isMatch(last, c)) return false;
    }
  }

  return stack.length === 0;
};