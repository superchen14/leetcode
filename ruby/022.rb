# @param {Integer} n
# @return {String[]}
def generate_parenthesis(n)
  return [] if n == 0
  return ["()"] if n == 1

  parent_results = generate_parenthesis(n - 1)
  results = []
  parent_results.each do |r|
    r.each_char.with_index do |char, i|
      if char == "("
        if i == 0
          results.push("()" + r)
          results.push("(()" + r[1..-1]);
        else
          results.push(r[0..i-1] + "()" + r[i..-1])
          results.push(r[0..i] + "()" + r[i+1..-1])
        end
      end
    end
  end
  results.uniq
end