/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";

  strValue = countAndSay(n - 1);
  let number = "";
  let count = 0;
  let result = ""
  while(strValue.length > 0) {
    if (strValue[0] === number) {
      ++count;
    } else {
      if (count > 0) result = result + count + number;
      number = strValue[0];
      count = 1;
    }
    strValue = strValue.substring(1);
  }

  result = result + count + number;
  return result;
};