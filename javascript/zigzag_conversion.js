/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) { return s; }

  var total = 2 * numRows - 2;
  function getRow(index) {
    var remain = index % total;
    return remain < numRows ? remain : total - remain;
  }

  var rowStrings = {};
  for (var index = 0; index < s.length; ++index) {
    var row = getRow(index);
    rowStrings[row] = (rowStrings[row] || "") + s[index];
  }

  var returnValue = "";
  for (var index = 0; index < numRows; ++index) {
    returnValue += (rowStrings[index] || "");
  }

  return returnValue;
};

convert("", 1);