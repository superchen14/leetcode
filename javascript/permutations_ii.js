/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length == 1) return [nums];
  nums = nums.sort(function (a, b) { return a - b; });

  var usedNums = [];
  var results = [];
  for(var i = 0; i < nums.length; ++i) {
    if (usedNums.indexOf(nums[i]) !== -1) continue;

    usedNums.push(nums[i]);
    var temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;

    var subResults = permuteUnique(nums.slice(1));
    for (var j = 0; j < subResults.length; ++j) {
      results.push([nums[0]].concat(subResults[j]));
    }

    temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
  }

  return results;
};

var asdf = permuteUnique([1, 1, 2]);
asdf = asdf;