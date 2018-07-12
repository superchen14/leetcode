def find_result(candidates, i, target, results, list)
  return if target < 0
  if target == 0
    results.push(list.dup)
    return
  end

  i.upto(candidates.length - 1).each do |index|
    list.push(candidates[index])
    find_result(candidates, index, target - candidates[index], results, list)
    list.pop
  end
end

# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
  results = []
  list = []
  find_result(candidates, 0, target, results, list)
  results
end