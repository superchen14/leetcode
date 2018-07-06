# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def next_permutation(nums)
  last_asc_index = -1
  0.upto(nums.length - 2) do |i|
    last_asc_index = i if nums[i] < nums[i + 1]
  end

  if last_asc_index == -1
    nums.reverse!
  else
    sub_array = nums[last_asc_index + 1..-1]
    min_in_sub = sub_array.select{|n| n > nums[last_asc_index]}.min
    sub_array.push(nums[last_asc_index])
    sub_array.delete_at(sub_array.index(min_in_sub))
    sub_array.sort!
    p sub_array
    nums[last_asc_index] = min_in_sub
    temp = last_asc_index + 1
    sub_array.each do |n|
      nums[temp] = n
      temp += 1
    end
  end
end