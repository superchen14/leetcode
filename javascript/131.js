/**
 * @param {string} s
 * @return {string[][]}
 */
var cache = {};
var partition = function(s) {
  if (cache[s]) return cache[s];

  function isPalindrome(substring) {
    var i = 0;
    var j = substring.length - 1;
    while(i < j) {
      if (substring[i] !== substring[j]) return false;
      ++i;
      --j;
    }

    return true;
  }

  var result = [];
  for(var i = 1; i <= s.length - 1; ++i) {
    var substring1 = s.slice(0, i);
    var substring2 = s.slice(i, s.length);
    if (isPalindrome(substring1)) {
      result = result.concat(partition(substring2).map(function(solution){
        return [substring1].concat(solution);
      }));
    }
  }

  if (isPalindrome(s)) result.push([s]);

  cache[s] = result;
  return result;
};