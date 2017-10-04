/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  var commonPrefix = "";

  var minLength = Number.MAX_VALUE;
  var minIndex = strs.length;
  for (var i = 0; i < strs.length; ++i) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
      minIndex = i;
    }
  }

  i = 0;
  for(; i < minLength; ++i) {
    var character = strs[minIndex][i]; 
    var areSame = true;
    for (var j = 0; j < strs.length; ++j) {
      if (strs[j][i] !== character) {
          areSame = false;
          break;
      }
    }

    if (!areSame) break;
  }

  return strs[0].slice(0, i);
};