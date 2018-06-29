# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  return false if x < 0
  return true if x == 0
  x.to_s.reverse == x.to_s
end