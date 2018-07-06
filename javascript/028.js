/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var haystackLength = haystack.length;
  var needleLength = needle.length;
  if (needleLength === 0) return 0;
  for (var i = 0; i < haystackLength; ++i) {
    if (i + needleLength > haystackLength) return -1;
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }
  return -1;
};