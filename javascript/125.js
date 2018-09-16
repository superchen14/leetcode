/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/ig,"");
  s = s.toLowerCase();

  let start = 0;
  let end = s.length - 1;
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