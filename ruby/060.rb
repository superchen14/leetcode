def factorial(n)
  return 1 if n == 0
  result = 1
  1.upto(n) {|i| result *= i}
  result
end
# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_permutation(n, k)
  k -= 1
  list = []
  1.upto(n).each do |i|
    list.push(i)
  end

  result = ""
  value = n - 1
  while value >= 0 do
    factorial_value = factorial(value)
    index = (k - k  % factorial_value) / factorial_value
    k -= index * factorial_value
    result += list.slice!(index).to_s
    value -= 1
  end

  result
end