# @param {String} s1
# @param {String} s2
# @return {Boolean}
def is_scramble(s1, s2)
  return false if s1.length != s2.length
  return s1 == s2 if s1.length == 1

  all_match = true
  s1_array = s1.split("").sort!
  s2_array = s2.split("").sort!
  s1_array.each_with_index do |char, index|
    if char != s2_array[index]
      all_match = false
      break
    end
  end
  return false if !all_match

  any_match = false
  1.upto(s1.length - 1).each do |end_pos|
    s1_part1 = s1[0...end_pos]
    s1_part2 = s1[end_pos..s1.length]

    s2_part1 = s2[0...end_pos]
    s2_part2 = s2[end_pos..s2.length]
    if is_scramble(s1_part1, s2_part1) && is_scramble(s1_part2, s2_part2)
      any_match = true
      break
    end

    end_pos = s1.length - end_pos
    s2_part1 = s2[0...end_pos]
    s2_part2 = s2[end_pos...s2.length]
    if is_scramble(s1_part1, s2_part2) && is_scramble(s1_part2, s2_part1)
      any_match = true
      break
    end
  end

  return any_match
end