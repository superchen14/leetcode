/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  var commonPrefix = "";

  let minLength = Number.MAX_VALUE;
  let indexOfShortestString = 0;
  for (let i = 0; i < strs.length; ++i) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
      indexOfShortestString = i;
    }
  }

  let i = 0;
  for(; i < minLength; ++i) {
    const character = strs[indexOfShortestString][i]; 
    let areSame = true;
    for (let j = 0; j < strs.length; ++j) {
      if (strs[j][i] !== character) {
          areSame = false;
          break;
      }
    }

    if (!areSame) break;
  }

  return strs[0].slice(0, i);
};