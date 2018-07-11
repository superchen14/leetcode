# @param {Integer} n
# @return {String}
def count_and_say(n)
  return "1" if n == 1
  parent_result = count_and_say(n - 1)
  parent_length = parent_result.length
  result = ""
  current = 0
  while current < parent_length do
    value = parent_result[current]
    count = 1
    while current < parent_length - 1 && parent_result[current + 1] == value do
      count += 1
      current += 1
    end

    result += (count.to_s + value)
    current += 1
  end

  result
end