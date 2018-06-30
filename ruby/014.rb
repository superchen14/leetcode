# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  result = ""
  return result if strs.length == 0
  return strs[0] if strs.length == 1
  strs[0].each_char.with_index do |char, index|
    if strs.all? {|str| str[index] == char}
      result += char
    else
      break
    end
  end

  result
end