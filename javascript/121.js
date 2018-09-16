/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const _maxProfit = start => {
    if (prices.length - start <= 1) return 0;
    if (prices[start] >= prices[start + 1]) return _maxProfit(start + 1);

    let maxIndex = start + 1;
    let maxValue = prices[start + 1];
    for (let i = start + 2; i < prices.length; ++i) {
      if (prices[i] > maxValue) {
        maxIndex = i;
        maxValue = prices[i];
      }
    }

    let minIndex = start;
    let minValue = prices[start];
    for (let i = start + 1; i < maxIndex; ++i) {
      if (prices[i] < minValue) {
        minIndex = i;
        minValue = prices[i];
      }
    }

    return Math.max(maxValue - minValue, _maxProfit(maxIndex + 1));
  }

  return _maxProfit(0);
};