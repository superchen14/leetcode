/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var positiveMax = (1 << 30) * 2 - 1;
  var isNegative = false;
  if (x < 0) {
    x = -x;
    isNegative = true;
  }

  var result = 0;
  while(true) {
    var remain = x % 10;
    result = result * 10 + remain;
    if (result > positiveMax) return 0;

    if (x - remain === 0) { break; }
    x = (x - remain) / 10;
  }

  if (isNegative) { result = -result; }

  return result;
};