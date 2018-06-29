/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;

  reverseNumber = 0;
  temp = x;
  while(true) {
    var remain = temp % 10;
    reverseNumber = reverseNumber * 10 + remain;

    if (temp - remain === 0) { break; }
    temp = (temp - remain) / 10;
  }

  return reverseNumber === x;
};