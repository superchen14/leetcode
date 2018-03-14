/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let substring = "";
  let maxLength = 0;
  for(var index = 0; index < s.length; ++index) {
    const indexOfCurrentCharater = substring.indexOf(s[index]);
    if (indexOfCurrentCharater === -1) {
      substring = s.substring(start, index + 1);
    } else {
      start = start + indexOfCurrentCharater + 1;
      substring = s.substring(start, index + 1);
    }

    if (substring.length > maxLength) {
      maxLength = substring.length;
    }
  }

  return maxLength;
};