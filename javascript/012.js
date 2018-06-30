/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const values  = [1000, 900,  500,  400,  100,   90,  50,   40,  10,    9,   5,    4,   1];
  const symbols = [ "M", "CM", "D", "CD",  "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  let roman = "";
  for(var i = 0; num > 0; ++i) {
    let times = Number.parseInt(num / values[i]);
    num = num - times * values[i];
    while(times > 0) {
      roman += symbols[i];
      --times;
    }
  }

  return roman;
};