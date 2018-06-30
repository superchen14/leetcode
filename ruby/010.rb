# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match_imp(s, p, i, j)
  return i == s.length if j == p.length

  if p.length == j + 1 || p[j + 1] != "*"
    return false if s.length == i
    return false if s[i] != p[j] && p[j] != "."
    return is_match_imp(s, p, i + 1, j + 1)
  end

  # if code comes here p[j + 1] === "*"
  while i < s.length && (s[i] == p[j] || p[j] == ".") do
    return true if is_match_imp(s, p, i, j + 2)
    i += 1
  end

  is_match_imp(s, p, i, j + 2)
end

def is_match(s, p)
  is_match_imp(s, p, 0, 0)
end