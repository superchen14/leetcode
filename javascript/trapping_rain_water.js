/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var maxHeight = 0;
  var maxHeightIndex = -1;
  for (var i = 0; i < height.length; ++i) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      maxHeightIndex = i;
    }
  }

  var waterCount = 0;

  var currentMaxHeight = 0;
  for (var i = 0; i <= maxHeightIndex; ++i) {
    if (height[i] > currentMaxHeight) {
      currentMaxHeight = height[i];
    } else {
      waterCount += (currentMaxHeight - height[i]);
    }
  }

  currentMaxHeight = 0;
  for (var i = height.length - 1; i > maxHeightIndex; --i) {
    if (height[i] > currentMaxHeight) {
      currentMaxHeight = height[i];
    } else {
      waterCount += (currentMaxHeight - height[i]);
    }
  }

  return waterCount;
};