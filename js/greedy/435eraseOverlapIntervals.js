/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function(intervals) {
// 	if(intervals.length == 0){
// 		return 0;
// 	}
//     let xsets = 0;
//     let len = intervals.length;
//     intervals.sort((a,b)=>a[1]-b[1]);
//     while(intervals.length > 0){
//     	let x = intervals.shift();
//     	xsets++;
//     	intervals = intervals.filter(a=> (a[0] >= x[1] || a[1] <= x[0]) ? a:null);
//     }
//     return len-xsets;
// };

var eraseOverlapIntervals = function(intervals) {
	let len = intervals.length;
    if(len == 0){
    	return 0;
    }
    intervals.sort((a,b)=>a[1]-b[1]);
    let count = 1;
    let end = intervals[0][1];
    for (let i = 1; i < len; i++) {
    	if(intervals[i][0] >= end){
    		end = intervals[i][1];
    		count ++;
    	}
    }
    return len-count;
};

let testcase = eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]);
console.log(testcase);
export default eraseOverlapIntervals;