# Time Limit Exceeded, correct solution see 044.js

# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match(s, p)
  return true if p.length == 0 && s.length == 0
  return false if p.length == 0
  if s.length == 0
    if p[0] == "*"
      return is_match("", p[1..p.length-1])
    else
      return false
    end
  end

  p.sub!('**', '*')

  if p[0] == "*"
    return true if p.length == 1
    next_p = p[1..p.length-1]
    return is_match("", next_p) if s == ""
    return 0.upto(s.length).any? {|i| is_match(s[i..s.length-1], next_p)}
  elsif p[0] == "?"
    return is_match(s[1..s.length-1], p[1..p.length-1])
  else
    return false if s[0] != p[0]
    return is_match(s[1..s.length-1], p[1..p.length-1])
  end
end