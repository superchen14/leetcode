/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === "" || s[0] === "0") return 0;
  if (s.length === 1) return 1;

  var num1 = 1;
  var num2 = 1;
  var num3 = 1;
  for(var i = 1; i < s.length; ++i) {
    if (s[i] === "0") {
      if (s[i-1] === "1" || s[i-1] === "2") {
        num3 = num1;
      } else {
        return 0;
      }
    } else {
      if (s[i-1] !== "1" && s[i-1] !== "2") {
        num3 = num2;
      } else {
        var lastTwo = s[i-1] + s[i];
        if (lastTwo === "27" || lastTwo === "28" || lastTwo === "29") {
          num3 = num2;
        } else {
          num3 = num1 + num2;
        }
      }
    }
    num1 = num2;
    num2 = num3;
  }

  return num2;
};