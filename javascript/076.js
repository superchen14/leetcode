/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length === 0) return "";
  let targetMap = {};
  for(let i = 0; i < t.length; ++i) {
    targetMap[t[i]] = targetMap[t[i]] ? targetMap[t[i]] + 1 : 1;
  }

  // try find first match
  let currentMap = {};
  let targetCount = t.length;
  let end = 0;
  while(targetCount > 0 && end <= s.length) {
    const currentChar = s[end];
    if (targetMap[currentChar]) {
      currentMap[currentChar] = currentMap[currentChar] ? currentMap[currentChar] + 1 : 1;
      if (currentMap[currentChar] <= targetMap[currentChar]) --targetCount;
    }
    ++end;
  }
  if (targetCount > 0) return "";

  let start = 0;
  let minLength = end - start;
  let resultStart = start;
  let resultEnd = end;

  while(end <= s.length) {
    // move start if s[start] not in targetMap or it's current count is larger then target count
    while(!(s[start] in targetMap) || currentMap[s[start]] > targetMap[s[start]]) {
      if (s[start] in targetMap) {
        currentMap[s[start]] = currentMap[s[start]] - 1;
      }
      ++start;
      const currentLength = end - start;
      if (currentLength < minLength) {
        minLength = currentLength;
        resultStart = start;
        resultEnd = end;
      }
    }

    while(!(s[end] in targetMap) && end < s.length) {
      ++end;
    }
    if (end === t.length) break;

    currentMap[s[end]] = currentMap[s[end]] + 1;
    ++end;
  }

  return s.substr(resultStart, minLength);
};