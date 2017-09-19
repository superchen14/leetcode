/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort(function(a, b) { return a - b; });

  hash = {};
  nums.forEach(function(num) {
    var count = hash[num];
    hash[num] = count === undefined ? 1 : count + 1;
  });

  var result = [];
  var resultHash = {};
  for (var i = 0; i < nums.length; ++i) {
    for (var j = i + 1; j < nums.length; ++j) {
      var a = nums[i];
      var b = nums[j];
      var c = 0 - a - b;
      if (c < b) break;
      if (hash[c] === undefined) continue;
      if (resultHash[a + "#" + b + "#" + c]) continue;

      hash[a]--;
      hash[b]--;
      if (hash[c] > 0) {
        result.push([a, b, c]);
        resultHash[a + "#" + b + "#" + c] = true;
      }
      hash[a]++;
      hash[b]++;
    }
  }

  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);