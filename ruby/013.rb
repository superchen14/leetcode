# @param {String} s
# @return {Integer}
def roman_to_int(s)
  hash = {
    "M" => 1000,
    "CM" => 900,
    "D" => 500,
    "CD" => 400,
    "C" => 100,
    "XC" => 90,
    "L" => 50,
    "XL" => 40,
    "X" => 10,
    "IX" => 9,
    "V" => 5,
    "IV" => 4,
    "I" => 1
  }

  result = 0
  while s.length > 0 do
    if s.length >= 2 && !hash[s[0..1]].nil?
      result += hash[s[0..1]]
      s = s[2..-1]
    else
      result += hash[s[0]]
      s = s[1..-1]
    end
  end

  result
end