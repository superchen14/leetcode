/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var values  = [1000, 900,  500,  400,  100,   90,  50,   40,  10,    9,   5,    4,   1];
  var symbols = [ "M", "CM", "D", "CD",  "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  var roman = "";
  for(var i = 0; num > 0; ++i) {
    while(num >= values[i]) {
      num = num - values[i];
      roman += symbols[i];
    }
  }

  return roman;
};