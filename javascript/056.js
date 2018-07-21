/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort(function(a, b) { return a.start - b.start; });
  
  var mergedIntervals = [];
  intervals.forEach(function(interval) {
    if (mergedIntervals.length === 0) {
      mergedIntervals.push(interval);
    } else {
      var lastInterval = mergedIntervals[mergedIntervals.length - 1];
      if (interval.start > lastInterval.end) {
        mergedIntervals.push(interval);
      } else if (interval.end > lastInterval.end) {
        lastInterval.end = interval.end;
      }
    }
  });

  return mergedIntervals;
};