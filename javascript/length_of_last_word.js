/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  if (s === "") return 0;
  var words = s.split(" ");
  return words[words.length - 1].length;
};