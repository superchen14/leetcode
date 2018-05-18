/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  const _maxProfit1 = (start, end) => {
    if (end - start <= 1) return 0;
    if (prices[start] >= prices[start + 1]) return _maxProfit1(start + 1, end);

    let maxIndex = start + 1;
    let maxValue = prices[start + 1];
    for (let i = start + 2; i < end; ++i) {
      if (prices[i] > maxValue) {
        maxIndex = i;
        maxValue = prices[i];
      }
    }

    let minIndex = start;
    let minValue = prices[start];
    for (let i = start + 2; i < maxIndex; ++i) {
      if (prices[i] < minValue) {
        minIndex = i;
        minValue = prices[i];
      }
    }

    return Math.max(maxValue - minValue, _maxProfit1(maxIndex + 1, end));
  }

  let maxProfitBeforeI = [];
  let maxProfitAfterI = [];
  let result = 0;
  for (let i = 0; i < prices.length; ++i) {
    maxProfitBeforeI[i] = _maxProfit1(0, i);
    maxProfitAfterI[i] = _maxProfit1(i, prices.length);
    const currentProfit = maxProfitBeforeI[i] + maxProfitAfterI[i];
    if (currentProfit > result) result = currentProfit;
  }

  return result;
};

maxProfit([3,3,5,0,0,3,1,4]);