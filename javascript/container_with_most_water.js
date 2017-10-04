/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  var i = 0;
  var j = heights.length - 1;

  var getVolume = function(i, j) {
    var height = heights[i] < heights[j] ? heights[i] : heights[j];
    return height * (j - i);
  }

  var maxVolume = getVolume(i, j);
  while(true) {
    var iHeight = heights[i];
    var jHeight = heights[j];
    if (iHeight < jHeight) {
      while(iHeight > heights[++i]) {}
    } else {
      while(jHeight > heights[--j]) {}
    }
    if (i >= j) break;
    var volume = getVolume(i, j);
    if (volume > maxVolume) maxVolume = volume;
  }

  return maxVolume;
};