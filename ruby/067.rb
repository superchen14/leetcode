# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
  current_a = a.length - 1
  current_b = b.length - 1

  result = ""
  left = 0
  while current_a >= 0 || current_b >= 0 do
    a_value = current_a >= 0 ? a[current_a].to_i : 0
    b_value = current_b >= 0 ? b[current_b].to_i : 0
    sum = a_value + b_value + left
    if sum <= 1
      result = sum.to_s + result
      left = 0
    else
      result = (sum - 2).to_s + result
      left = 1
    end

    current_a -= 1 if current_a >= 0
    current_b -= 1 if current_b >= 0
  end

  result = left.to_s + result if left > 0

  result
end