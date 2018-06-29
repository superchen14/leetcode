# @param {String} str
# @return {Integer}
def my_atoi(str)
  str.strip!
  is_positive = true
  if str[0] == "-" || str[0] == "+"
    if str[0] == "-"
      is_positive = !is_positive
    end
    str = str[1..-1]
  end


  int_max = 2147483647;
  int_min = -2147483648;
  result = 0
  hash = {"0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9}
  str.each_char do |char|
    break if hash[char].nil?
    value = hash[char]
    result = result * 10 + value
    return (is_positive ? int_max : int_min) if result > int_max
  end

  is_positive ? result : -result
end