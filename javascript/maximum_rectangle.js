/**
 * @param {character[][]} matrix
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

var maximalRectangle = function(matrix) {
  const rowCount = matrix.length;
  if (rowCount === 0) return 0;
  const colCount = matrix[0].length;
  if (colCount === 0) return 0;

  getHeight = (row, col) => {
    let height = 0;
    while(row >= 0) {
      if (matrix[row][col] === "1") {
        ++height;
        --row;
      } else {
        break;
      }
    }

    return height;
  }

  let maxValue = 0;
  for(let row = 0; row < rowCount; ++row) {
    let heights = [];
    for(let col = 0; col < colCount; ++col) {
      heights.push(getHeight(row, col));
    }
    const largestArea = largestRectangleArea(heights);
    if (largestArea > maxValue) maxValue = largestArea;
  }

  return maxValue;
};