/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  function getSortedStr(str) {
    var array = str.split("").sort(function(a, b) {return a.charCodeAt(0) - b.charCodeAt(0);});
    sortedStr = array.join("");
    return sortedStr;
  }

  var hash = {};
  for(var i = 0; i < strs.length; ++i) {
    var str = strs[i];
    var sortedStr = getSortedStr(str);
    hash[sortedStr] ? hash[sortedStr].push(str) : hash[sortedStr] = [str];
  }

  var results = [];
  for(var key in hash) {
    results.push(hash[key]);
  }

  return results;
};