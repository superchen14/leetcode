/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [];
  const isNumber = char => char !== "(" && char !== ")";
  const merge = stack => {
    if (stack.length <= 1) return;

    const lastIndex = stack.length - 1;
    if (isNumber(stack[lastIndex]) && isNumber(stack[lastIndex - 1])) {
      stack[lastIndex - 1] = stack[lastIndex] + stack[lastIndex - 1];
      stack.pop();
      return merge(stack);
    } else {

    }
  }

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length >= 1 && stack[stack.length - 1] === "(") {
        stack.pop();
        stack.push(2);
        merge(stack);
      } else if (stack.length >= 2 && stack[stack.length - 2] === "(") {
        const length = stack.pop();
        stack.pop();
        stack.push(length + 2);
        merge(stack);
      } else {
        stack.push(s[i]);
      }
    }
  }

  let maxLength = 0;
  for(let i = 0; i < stack.length; ++i) {
    if (isNumber(stack[i]) && stack[i] > maxLength) {
      maxLength = stack[i];
    }
  }

  return maxLength;
};

longestValidParentheses(")()())()()(");