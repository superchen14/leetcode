# @param {String} word1
# @param {String} word2
# @return {Integer}
def min_distance(word1, word2)
  length1 = word1.length
  length2 = word2.length

  cache = []
  0.upto(length1).each do |num|
    cache[num] = num
  end

  0.upto(length2).each do |num|
    cache[num * (length1 + 1)] = num
  end

  1.upto(length2).each do |i|
    1.upto(length1).each do |j|
      if word1[j - 1] == word2[i - 1]
        cache[i * (length1 + 1) + j] = cache[(i - 1) * (length1 + 1) + j - 1]
      else
        a = cache[(i - 1) * (length1 + 1) + j]
        b = cache[i * (length1 + 1) + j - 1]
        c = cache[(i - 1) * (length1 + 1) + j - 1]
        cache[i * (length1 + 1) + j] = [a, b, c].min + 1
      end
    end
  end

  return cache[(length1 + 1) * (length2 + 1) - 1]
end