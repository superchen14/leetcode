/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  var wordHash = {};
  wordList.forEach(function(w){ wordHash[w] = true; });
  if (!wordHash[endWord]) return 0;

  const getSimilarWords = word => {
    const similarWords = [];
    for (let i = 0; i < word.length; ++i) {
      var alphabets = "abcdefghijklmnopqrstuvwxyz";
      for (let j = 0; j < 26; ++j) {
        if (alphabets[j] == word[i]) continue;
        const similarWord = word.substring(0, i) + alphabets[j] + word.substring(i + 1);
        if (wordHash[similarWord]) similarWords.push(similarWord);
      }
    }

    return similarWords;
  }

  const depthHash = {};
  depthHash[beginWord] = 1;
  const array = [beginWord];
  while(array.length > 0) {
    const currentWord = array.shift();
    const similarWords = getSimilarWords(currentWord, wordHash);
    for (let i = 0; i < similarWords.length; ++i) {
      const similarWord = similarWords[i];
      if (similarWord == endWord) return depthHash[currentWord] + 1;
      depthHash[similarWord] = depthHash[currentWord] + 1;
      delete wordHash[similarWord];
      array.push(similarWord);
    }
  }

  return 0;
};