/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [-1];

  let last = array => array[array.length - 1];

  let maxLength = 0;
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (char === "(") {
      stack.push(i);
    } else {
      if (s[last(stack)] === "(") {
        stack.pop();
        const currentMaxLength = i - last(stack);
        if (currentMaxLength > maxLength) maxLength = currentMaxLength;
      } else {
        stack.push(i);
      }
    }
  }

  return maxLength;
};