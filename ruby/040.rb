def find_result(candidates, i, target, results, list)
  if target == 0
    results.push(list.dup)
    return
  end

  return if target < 0
  return if i == candidates.length

  i.upto(candidates.length - 1).each do |index|
    next if index > i && candidates[index] == candidates[index - 1]
    list.push(candidates[index])
    find_result(candidates, index + 1, target - candidates[index], results, list)
    list.pop
  end
end

# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum2(candidates, target)
  candidates.sort!
  results = []
  list = []
  find_result(candidates, 0, target, results, list)
  results
end