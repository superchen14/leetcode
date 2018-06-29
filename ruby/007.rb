# @param {Integer} x
# @return {Integer}
def reverse(x)
  return 0 if x == 0 

  positive_max = (1 << 30) * 2 - 1;
  is_negative = x < 0
  x = -x if is_negative

  result = 0
  while x > 0 do
    left = x % 10
    result = result * 10 + left
    return 0 if result > positive_max
    x = (x - left) / 10
  end

  is_negative ? -result : result
end

p reverse(1534236469)