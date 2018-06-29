# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  string_rows = Array.new(num_rows)
  num_rows.times { |index| string_rows[index] = []}

  return s if num_rows == 1

  mod_value = 2 * num_rows - 2
  s.each_char.with_index do |char, index|
    mod = index % mod_value
    if mod >= num_rows
      mod = num_rows - (mod - num_rows + 2)
    end
    string_rows[mod].push char
  end

  return string_rows.map{|row| row.join("")}.join("")
end