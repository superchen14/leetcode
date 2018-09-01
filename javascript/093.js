/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const isValidPart = part => {
    if (part.length === 1) return true;
    if (part.length === 2) return part[0] !== "0";
    if (part.length === 3) {
      if (part[0] === "0") return false;
      return Number.parseInt(part) < 256;
    }

    return false;
  }

  const restoreSubIpAddresses = (s, num) => {
    if (num === 1 && isValidPart(s)) {
      return [s];
    }

    if (s.length > 3 * num) return [];
    if (s.length < num) return [];

    let results = [];
    for(let i = 1; i <= 3; ++i) {
      if (s.length < i) break;
      const part = s.substr(0, i);
      const left = s.substr(i);
      if (!isValidPart(part)) continue;
      const subResults = restoreSubIpAddresses(left, num - 1);
      subResults.forEach(subResult => {
        results.push([part].concat(subResult));
      });
    }
    return results;
  }

  const results = restoreSubIpAddresses(s, 4);
  return results.map(r => r.join("."));
};