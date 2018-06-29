# @param {String} s
# @return {String}
def longest_palindrome(s)
  s = " " + s.split("").join(" ") + " "
  length = s.length
  max_length = 1
  max_string = ""
  max_left = 0
  max_right = 0
  s.each_char.with_index do |char, index|
    left = index
    right = index
    while left >= 0 && right < length do
      if s[left] == s[right]
        if right - left + 1 > max_length
          max_left = left
          max_right = right
          max_length = right - left + 1
        end
        left -= 1
        right += 1
      else
        break
      end
    end
  end
  max_string = s[max_left..max_right]
  max_string.split(" ").join("")
end