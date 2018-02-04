/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const getMap = () => {
    let map = {};
    words.forEach(word => {
      if (word in map) {
        map[word] = map[word] + 1;
      } else {
        map[word] = 1;
      }
    });
    return map;
  }

  let wordLength = words[0].length;
  let results = [];
  for(let i = 0; i <= s.length - wordLength * words.length; i = i + 1) {
    let map = getMap();
    let j = i;
    while(j <= s.length - wordLength) {
      const subString = s.substr(j, wordLength);
      if (subString in map) {
        if (map[subString] === 1) {
          delete map[subString];
        } else {
          map[subString] = map[subString] - 1;
        }
        j = j + wordLength;
      } else {
        break;
      }
    }

    if (Object.keys(map).length === 0) results.push(i);
  }

  return results;
};