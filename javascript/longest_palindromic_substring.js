/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var maxLength = 0;
  var maxStr = "";
  var strLength = s.length;
  for (var index = 0; index < 2 * strLength - 1; ++index) {
    var isIndexEven = index % 2 === 0;
    var left = isIndexEven ? index / 2 : (index - 1)/2;
    var right = isIndexEven ? left : left + 1;
    var length = isIndexEven ? -1 : 0;
    var currentStr = index % 2 ? "" : s[index];
    while(left >= 0 && right < strLength) {
      if (s[left] === s[right]) {
        currentStr = s.substring(left, right + 1);
        length = length + 2;
      } else {
        break;
      }
      --left;
      ++right;
    }

    if (length > maxLength) {
      maxStr = currentStr;
      maxLength = length;
    }
  }

  return maxStr;
};