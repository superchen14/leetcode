/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var currentA = a.length - 1;
  var currentB = b.length - 1;

  var result = "";
  var left = 0;
  while(currentA >= 0 || currentB >= 0) {
    var aValue = 0;
    var bValue = 0;
    if (currentA >= 0) aValue = parseInt(a[currentA]);
    if (currentB >= 0) bValue = parseInt(b[currentB]);
    var newValue = aValue + bValue + left;
    if (newValue >= 2) {
      left = 1;
      newValue = newValue - 2;
    } else {
      left = 0;
    }

    result = newValue + result;
    if (currentA >= 0) --currentA;
    if (currentB >= 0) --currentB;
  }

  if (left > 0) result = left + result;

  return result;
};

addBinary("11", "1");