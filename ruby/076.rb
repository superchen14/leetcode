# @param {String} s
# @param {String} t
# @return {String}
def min_window(s, t)
  hash = {}
  t.each_char do |char|
    hash.has_key?(char) ? hash[char] += 1 : hash[char] = 1
  end

  temp_hash = hash.dup

  # find first solution
  current_hash = {}
  a = 0
  b = 0
  while temp_hash.keys.count > 0 && b < s.length do
    if temp_hash.has_key?(s[b])
      if temp_hash[s[b]] == 1
        temp_hash.delete(s[b])
      else
        temp_hash[s[b]] -= 1
      end
    end

    if hash.has_key?(s[b])
      if current_hash.has_key?(s[b])
        current_hash[s[b]] += 1
      else
        current_hash[s[b]] = 1
      end
    end
    b += 1
  end

  return "" if temp_hash.keys.count > 0

  min_window = s[a...b]
  min_length = b - a
  while b < s.length do
    while !hash.has_key?(s[a]) || current_hash[s[a]] > hash[s[a]] do
      if hash.has_key?(s[a]) && current_hash[s[a]] > hash[s[a]]
        current_hash[s[a]] -= 1
      end
      a += 1
    end

    if b - a < min_length
      min_length = b - a
      min_window = s[a...b]
    end

    return min_window if b == s.length

    target_char = s[a]
    a += 1
    while b < s.length && s[b] != target_char do
      if hash.has_key?(s[b])
        current_hash[s[b]] += 1
      end
      b += 1
    end

    return min_window if b == s.length

    b += 1
  end

  while !hash.has_key?(s[a]) || current_hash[s[a]] > hash[s[a]] do
    if hash.has_key?(s[a]) && current_hash[s[a]] > hash[s[a]]
      current_hash[s[a]] -= 1
    end
    a += 1
  end

  if b - a < min_length
    min_length = b - a
    min_window = s[a...b]
  end

  min_window
end