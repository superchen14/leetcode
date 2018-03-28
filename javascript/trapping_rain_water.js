/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxHeight = 0;
  let maxHeightIndex = -1;
  for (let i = 0; i < height.length; ++i) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      maxHeightIndex = i;
    }
  }

  let waterCount = 0;

  let currentMaxHeight = 0;
  for (let i = 0; i <= maxHeightIndex; ++i) {
    if (height[i] > currentMaxHeight) {
      currentMaxHeight = height[i];
    } else {
      waterCount += (currentMaxHeight - height[i]);
    }
  }

  currentMaxHeight = 0;
  for (let i = height.length - 1; i > maxHeightIndex; --i) {
    if (height[i] > currentMaxHeight) {
      currentMaxHeight = height[i];
    } else {
      waterCount += (currentMaxHeight - height[i]);
    }
  }

  return waterCount;
};