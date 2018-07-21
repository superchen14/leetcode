# @param {String} s
# @return {Integer}
def length_of_last_word(s)
  s.strip!
  return 0 if s.length == 0
  s.split(" ")[-1].length
end