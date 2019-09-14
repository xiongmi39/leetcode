/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if(intervals.length === 0){
		return intervals;
	}
	intervals.sort((a,b)=>{
		return a[0]-b[0];
	});
	for (let i = 0,len =intervals.length;  i < len; i++) {
		if(!intervals[i+1] || intervals.length <2){
			break;
		}
		if(intervals[i+1][0]>intervals[i][1] && intervals[i+1][1]>intervals[i][1]){
			continue;
		}
		let left,right;
		if(intervals[i][1] == intervals[i+1][0]){
			left = intervals[i][0];
			right = intervals[i+1][1];
		}else{
		intervals[i+1][0]-intervals[i][0] >0 ? left = intervals[i][0] : left = intervals[i+1][0];
		intervals[i+1][1]-intervals[i][1] >0 ? right = intervals[i+1][1] : right = intervals[i][1];			
		}


		intervals.splice(i,2,[left,right]);
		i--;
	}
    return intervals;
};
// [[1,3],[2,6]]
// [[1,5],[2,4]]
// [[2,5],[2,4]]
// [[2,6],[3,8]]
// [[2,8],[3,8]]

let testcase = [[2,8],[3,8],[1,3],[2,6],[1,5],[2,4]];
console.log(merge(testcase));

export default merge;