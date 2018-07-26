# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
  left = 1
  current = digits.length - 1
  while current >= 0 do
    digits[current] += left
    if digits[current] > 9
      digits[current] -= 10
      left = 1
    else
      left = 0
      break
    end

    current -= 1
  end
  
  if left == 1
    digits.unshift(1)
  end

  digits
end