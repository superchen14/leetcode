/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let results = [];
  let itemCount = 0;
  let currentlength = 0;
  let currentWords = [];
  words.forEach(word => {
    if (currentlength + itemCount * 1 + word.length <= maxWidth) {
      currentWords.push(word);
      currentlength += word.length;
      itemCount += 1;
    } else {
      results.push(currentWords);
      currentWords = [word];
      itemCount = 1;
      currentlength = word.length;
    }
  });

  if (currentWords.length > 0) {
    results.push(currentWords);
  }

  const getLineStr = (wordsInLine, isLastLine) => {
    if (wordsInLine.length === 1) {
      let word = wordsInLine[0];
      spaceCount = maxWidth - word.length;
      while(spaceCount > 0) {
        word = word + " ";
        --spaceCount;
      }
      return word;
    } else if (isLastLine) {
      let word = wordsInLine.join(" ");
      spaceCount = maxWidth - word.length;
      while(spaceCount > 0) {
        word = word + " ";
        --spaceCount;
      }
      return word;
    } else {
      let spaceCount = maxWidth - wordsInLine.reduce((sum, w) => {return sum + w.length}, 0);
      let slotCount = wordsInLine.length - 1;
      let value = Number.parseInt(spaceCount / slotCount);
      spaceCount -= slotCount * value;
      let slots = (new Array(slotCount)).fill(value);
      let i = 0;
      while(spaceCount > 0) {
        slots[i] += 1;
        --spaceCount;
        ++i;
      }

      let result = wordsInLine[0];
      for (let i = 1; i < wordsInLine.length; ++i) {
        result += ((new Array(slots[i - 1])).fill(" ").join("") + wordsInLine[i]);
      }

      return result;
    }
  }

  if (results.length === 1) {
    return results.map(wordsInLine => getLineStr(wordsInLine, true));
  } else {
    let lastOne = results[results.length - 1];
    results.pop();
    return results.map(wordsInLine => getLineStr(wordsInLine, false)).concat(getLineStr(lastOne, true));
  }
};