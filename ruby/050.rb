# @param {Float} x
# @param {Integer} n
# @return {Float}
def my_pow(x, n)
  return 1 if n == 0
  return 1 / my_pow(x, -n) if n < 0

  if n % 2 == 0
    value = my_pow(x, n / 2)
    value * value
  else
    value = my_pow(x, (n - 1) / 2)
    x * value * value
  end
end