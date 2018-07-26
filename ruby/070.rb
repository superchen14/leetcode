# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
  values = []
  1.upto(n).each do |n|
    values.push(1) if n == 1
    values.push(2) if n == 2
    values.push(values[-1] + values[-2]) if n > 2
  end

  values[-1]
end