/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [[nums[0]]];

  var length = nums.length;
  var results = [];
  previousResults = permute(nums.slice(0, nums.length - 1));
  for(var i = 0; i < previousResults.length; ++i) {
    var base = previousResults[i];
    var lastCharacter = nums[length - 1];
    for (var j = 0; j < length; ++j) {
      results.push(base.slice(0, j).concat([lastCharacter]).concat(base.slice(j)));
    }
  }

  return results;
};