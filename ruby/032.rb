# @param {String} s
# @return {Integer}
def longest_valid_parentheses(s)
  stack = [-1]
  max_length = 0
  0.upto(s.length - 1).each do |i|
    if s[i] == "("
      stack.push(i)
    else
      if stack[-1] >= 0 && s[stack[-1]] == "("
        stack.pop
        current_length = i - stack[-1]
        max_length = current_length if current_length > max_length
      else
        stack.push(i)
      end
    end
  end

  max_length
end