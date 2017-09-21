/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  if (intervals[0].start > newInterval.end) return [newInterval].concat(intervals);
  if (intervals[intervals.length - 1].end < newInterval.start) return intervals.concat([newInterval]);

  var mergedIntervals = [];
  var start = newInterval.start;
  var needToSetStart = true;
  var end = newInterval.end;
  for (var index = 0; index < intervals.length; ++index) {
    var interval = intervals[index];
    if (interval.end < newInterval.start) {
      mergedIntervals.push(interval);
    } else if (interval.start > newInterval.end) {
      mergedIntervals.push(new Interval(start, end));
      return mergedIntervals.concat(intervals.slice(index));
    } 
    else {
      if (needToSetStart) {
        start = (interval.start < newInterval.start ? interval.start : newInterval.start);
        needToSetStart = false;
      }
      end = interval.end > newInterval.end ? interval.end : newInterval.end;
    }
  }

  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};