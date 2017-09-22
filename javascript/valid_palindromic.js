/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/ig,"");
  s = s.toLowerCase();

  var start = 0;
  var end = s.length - 1;
  while(start < end) {
    if (s[start] === s[end]) {
      ++start;
      --end;
    } else {
      return false;
    }
  }

  return true;
};