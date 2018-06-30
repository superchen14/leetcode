# @param {Integer} num
# @return {String}
def int_to_roman(num)
  keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  result = ""
  while num > 0 do
    if values[0] > num
      values.shift
      keys.shift
    else
      result += keys[0]
      num -= values[0]
    end
  end

  result
end