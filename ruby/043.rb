# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
  return "0" if num2 == "0"
  return "0" if num1 == "0"

  num1 = num1.split("").map(&:to_i).reverse
  num2 = num2.split("").map(&:to_i)

  results = []
  num2.each do |b|
    sub_result = []
    left = 0
    num1.each do |a|
      value = a * b + left
      sub_result.push(value % 10)
      left = (value - value % 10) / 10
    end
    sub_result.push(left) if left > 0
    results = results.map{|sb| sb.push(0)}.push(sub_result.reverse)
  end

  results = results.map{|r| r.reverse}
  length = results[0].length
  result = []
  left = 0
  0.upto(length - 1).each do |i|
    sum = results.map{|r| i < r.length ? r[i] : 0}.reduce(:+) + left
    result.push(sum % 10)
    left = (sum - sum % 10) / 10
  end
  result.push(left) if left > 0

  result.reverse.join("")
end