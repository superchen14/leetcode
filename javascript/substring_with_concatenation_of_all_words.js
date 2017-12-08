/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  var map = {};
  var indexes = [];

  var distinctWords = [];
  for (var i = 0; i < words.length; ++i) {
    if (distinctWords.indexOf(words[i]) === -1) {
      distinctWords.push(words[i]);
    }
  }

  for (var i = 0; i < s.length; ++i) {
    distinctWords.forEach(function(word) {
      if (s.indexOf(word, i) === i) {
        indexes.push(i);
        map[i] = word;
      }
    });
  }

  var results = [];

  while(indexes.length > 0) {
    var isValid = true;
    var index = indexes[0];
    for (var i = 0; i < words.length - 1; ++i) {
      if (!map[index + map[index].length]) {
        isValid = false;
        break;
      } else {
        index = index + map[index].length;
      }
    }

    if (i < words.length - 1) {
      indexes = indexes.slice(1);
      continue;
    }

    var isValid = true;
    var candidateWords = words.slice();
    var index = indexes[0];
    for (var i = 0; i < words.length; ++i) {
      var word = map[index];
      var indexInCandidate = candidateWords.indexOf(word);
      if (indexInCandidate === -1) {
        isValid = false;
        break;
      } else {
        candidateWords.splice(indexInCandidate, 1);
        index = index + map[index].length;
      }
    }

    if (isValid) results.push(indexes[0]);
    indexes.shift();
  }

  return results;
};

findSubstring("barfoothefoobarman", ["foo","bar"]);