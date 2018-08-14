/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) return false;

  let s1Map = {};
  for(let i = 0; i < s1.length; ++i) {
    const c = s1[i];
    c in s1Map ?  s1Map[c] += 1 : s1Map[c] = 0;
  }

  let s2Map = {};
  for(let i = 0; i < s2.length; ++i) {
    const c = s2[i];
    c in s2Map ?  s2Map[c] += 1 : s2Map[c] = 0;
  }

  for(key in s1Map) {
    if (s1Map[key] !== s2Map[key]) return false;
  }

  if (s1.length === 1) return s1 === s2;

  for(let i = 1; i < s1.length; ++i) {
    const s1Part1 = s1.substr(0, i);
    const s1Part2 = s1.substr(i);
    const s2Part11 = s2.substr(0, i);
    const s2Part21 = s2.substr(i);
    const s2Part12 = s2.substr(0, s2.length - i);
    const s2Part22 = s2.substr(s2.length - i);
    if (isScramble(s1Part1, s2Part11) && isScramble(s1Part2, s2Part21)) { return true; }
    if (isScramble(s1Part1, s2Part22) && isScramble(s1Part2, s2Part12)) { return true; }
  }

  return false;
};