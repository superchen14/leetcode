var myAtoi = function(str) {
  str = str.trim();
  var pattern = /^(\-|\+)?[0-9]+/;
  var matchResults = pattern.exec(str); 
  if (!matchResults) { return 0; }

  var num = Number(matchResults[0]);
  var intMax = 2147483647;
  var intMin = -2147483648;
  if (num > intMax) { return intMax; }
  if (num < intMin) { return intMin; }
  return num;
};