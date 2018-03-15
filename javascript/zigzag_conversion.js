/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) { return s; }

  const total = 2 * numRows - 2;
  function getRow(index) {
    const remain = index % total;
    return remain < numRows ? remain : total - remain;
  }

  let rowStrings = {};
  for (let index = 0; index < s.length; ++index) {
    const row = getRow(index);
    rowStrings[row] = (rowStrings[row] || "") + s[index];
  }

  let returnValue = "";
  for (let index = 0; index < numRows; ++index) {
    returnValue += (rowStrings[index] || "");
  }

  return returnValue;
};