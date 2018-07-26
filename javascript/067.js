/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let indexA = a.length - 1;
  let indexB = b.length - 1;

  let result = "";
  let left = 0;
  while(indexA >= 0 || indexB >= 0) {
    let aValue = 0;
    let bValue = 0;
    if (indexA >= 0) aValue = parseInt(a[indexA]);
    if (indexB >= 0) bValue = parseInt(b[indexB]);
    let newValue = aValue + bValue + left;
    if (newValue >= 2) {
      left = 1;
      newValue = newValue - 2;
    } else {
      left = 0;
    }

    result = newValue + result;
    if (indexA >= 0) --indexA;
    if (indexB >= 0) --indexB;
  }

  if (left > 0) result = left + result;

  return result;
};