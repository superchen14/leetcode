# Definition for an interval.
# class Interval
#     attr_accessor :start, :end
#     def initialize(s=0, e=0)
#         @start = s
#         @end = e
#     end
# end

# @param {Interval[]} intervals
# @return {Interval[]}
def merge(intervals)
  intervals.sort! {|a, b| a.start <=> b.start}

  result = []
  intervals.each do |interval|
    if result.length == 0
      result.push(interval)
    else
      last_end = result[-1].end
      if interval.start > last_end
        result.push(interval)
      else
        result[-1].end = interval.end if interval.end >= last_end
      end
    end
  end
  result
end