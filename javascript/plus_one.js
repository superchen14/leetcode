/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let left = 0;
  for(let i = digits.length - 1; i >= 0; --i) {
    if (i === digits.length - 1) {
      digits[i] += (1 + left);
    } else {
      digits[i] += left;
    }
    if (digits[i] > 9) {
      left = 1;
      digits[i] -= 10;
    } else {
      left = 0;
      break;
    }
  }

  if (left > 0) {
    return [left].concat(digits);
  } else {
    return digits;
  }
};