/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	if(intervals.length == 0){
		intervals.push(newInterval);
		return intervals;
	}
	if(newInterval.length === 0){
		intervals.splice(0,0,newInterval);
		return intervals;
	}
	for (var i = 0,len = intervals.length; i < len; i++) {
		if(newInterval[1]<intervals[0][0] && newInterval[1]<intervals[0][1]){
			intervals.unshift(newInterval);
			break;
		}
		if(newInterval[0]>intervals[len-1][0] && newInterval[0]>intervals[len-1][1]){
			intervals.push(newInterval);
			break;
		}
		if(newInterval[0]>intervals[i][1] && newInterval[1]>intervals[i][1]&&newInterval[0]<intervals[i+1][0] && newInterval[1]<intervals[i+1][0]){
			intervals.splice(i+1,0,newInterval);
			break;
		}
		if(intervals[i][0]<newInterval[0] && intervals[i][1]<newInterval[0]){
			continue;
		}
		let newleft = Math.min(intervals[i][0],intervals[i][1],newInterval[0]);
		let newright = Math.max(intervals[i][0],intervals[i][1],newInterval[1]);
		intervals.splice(i,1);
		len--;
		i--;
		newInterval = [newleft,newright];
		if(!intervals[i+1] ||(newright<intervals[i+1][0] && newright<intervals[i+1][1])){
			intervals.splice(i+1,0,[newleft,newright]);
			return intervals;
		}
	}
    return intervals;
};

function insert2(intervals, newInterval){
	let left = newInterval[0];
	let right = newInterval[1];
	let i = 0;
	for (; i < intervals.length; ) {
		if(left > intervals[i][1]){
			i++;
			continue;
		}
		if(right < intervals[i][0]){
			break;
		}
		left = Math.min(left,intervals[i][0]);
		right = Math.max(right,intervals[i][1]);
		intervals.splice(i,1);
	}
	intervals.splice(i,0,[left,right]);
	return intervals;
}

let testcase = insert2([[1,5]],[2,3]);
console.log(testcase);

export default insert;