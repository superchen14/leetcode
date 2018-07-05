# @param {String} s
# @return {Boolean}
def is_valid(s)
  is_valid = true
  list = []
  s.each_char do |char|
    case char
    when "(", "[", "{"
      list.push(char)
    when ")"
      if list[-1] == "("
        list.pop
      else
        is_valid = false
        break
      end
    when "]"
      if list[-1] == "["
        list.pop
      else
        is_valid = false
        break
      end
    when "}"
      if list[-1] == "{"
        list.pop
      else
        is_valid = false
        break
      end
    end
  end

  is_valid && list.empty?
end