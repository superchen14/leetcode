# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
  hash = {
    "2" => ["a", "b", "c"],
    "3" => ["d", "e", "f"],
    "4" => ["g", "h", "i"],
    "5" => ["j", "k", "l"],
    "6" => ["m", "n", "o"],
    "7" => ["p", "q", "r", "s"],
    "8" => ["t", "u", "v"],
    "9" => ["w", "x", "y", "z"],
  }

  results = []
  digits.each_char do |char|
    if results.length == 0
      results = hash[char]
    else
      results = results.map do |result|
        hash[char].map{|c| result + c}
      end.flatten
    end
  end

  results
end