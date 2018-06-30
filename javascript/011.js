/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  let i = 0;
  let j = heights.length - 1;

  const getVolume = (i, j) => {
    const height = heights[i] < heights[j] ? heights[i] : heights[j];
    return height * (j - i);
  }

  let maxVolume = getVolume(i, j);
  while(true) {
    const iHeight = heights[i];
    const jHeight = heights[j];
    if (iHeight < jHeight) {
      while(iHeight > heights[++i]) {}
    } else {
      while(jHeight > heights[--j]) {}
    }
    if (i >= j) break;
    const volume = getVolume(i, j);
    if (volume > maxVolume) maxVolume = volume;
  }

  return maxVolume;
};