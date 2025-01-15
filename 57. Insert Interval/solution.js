/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let start = newInterval[0]
    let end = newInterval[1]
    let result = []
    let i = 0;
    for(i =0; i < intervals.length; i++) {
        if(intervals[i][1] < start) {
            result.push(intervals[i])
        } else {
            break
        }
    }

    while(i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0])
        end = Math.max(end, intervals[i][1])
        i++
    }
  

    result.push([start,end])

    while(i < intervals.length) {
        result.push(intervals[i])
        i++
    }

    return result

};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))