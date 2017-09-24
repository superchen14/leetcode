/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 0) return 0;

  var start = 0;
  var end = x;

  while(true) {
    var temp = parseInt((start + end) / 2);
    var squareTemp = temp * temp;
    if (squareTemp === x) return temp;
    if (squareTemp < x && (temp + 1) * (temp + 1) > x) return temp;

    if (squareTemp > x) {
      end = temp;
    } else {
      start = temp + 1;
    }
  }
};