# @param {String} s
# @param {String[]} words
# @return {Integer[]}

def get_hash(words)
  hash = {}
  words.each do |word|
    if hash[word].nil?
      hash[word] = 1
    else
      hash[word] += 1
    end
  end

  hash
end

def find_substring(s, words)
  return [] if words.length === 0

  word_length = words[0].length
  result = []
  0.upto(s.length - words.length * word_length).each do |i|
    hash = get_hash(words)
    j = i
    while j <= s.length - word_length do
      word = s[j..j+word_length-1]
      break if hash[word].nil?

      if hash[word] == 1
        hash.delete(word)
      else
        hash[word] -= 1
      end
      j += word_length
    end

    result.push(i) if hash.keys.length == 0
  end

  result
end