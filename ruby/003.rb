# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  start_index = 0
  end_index = 0
  length = s.length

  hash = {}
  max_length = 0
  current_str = ""
  while end_index < length do
    char = s[end_index]
    if hash[char].nil?
      hash[char] = 1
      current_length = end_index - start_index + 1
      if current_length > max_length
        max_length = current_length
      end
      end_index += 1
    else
      start_char = s[start_index]
      hash[start_char] = nil
      start_index += 1
    end
  end

  max_length
end