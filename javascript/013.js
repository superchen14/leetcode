/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  symbolValueMap = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  };

  let value = 0;
  const length = s.length;
  for(let i = 0; i < length; ++i) {
    if (i === length - 1 || symbolValueMap[s[i]] >= symbolValueMap[s[i + 1]]) {
      value += symbolValueMap[s[i]];
    } else {
      value -= symbolValueMap[s[i]];
    }
  }

  return value;
};