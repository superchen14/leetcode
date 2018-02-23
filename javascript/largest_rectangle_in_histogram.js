/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  let result = 0;

  heights.forEach(height => {
    if (stack.length === 0 || stack[stack.length - 1] <= height) {
      stack.push(height);
    } else {
      let count = 0;
      while (stack.length > 0 && stack[stack.length - 1] > height) {
        ++count;
        const h = stack.pop();
        if (h * count > result) result = h * count;
      }

      while (count >= 0) {
        stack.push(height);
        --count;
      }
    }
  });

  const length = stack.length;
  for(let i = 0; i < length; ++i) {
    const value = stack[i] * (length - i);
    if (value > result) result = value;
  }

  return result;
};