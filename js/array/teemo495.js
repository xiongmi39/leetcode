
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
	if(timeSeries.length == 0){
		return 0;
	}
	let totaltime = duration;
    for (var i = 0; i < timeSeries.length; i++) {
    	if(timeSeries[i+1]-timeSeries[i] >= duration){
    		totaltime += duration;
    	}
    	if(timeSeries[i+1]-timeSeries[i] < duration){
    		totaltime = totaltime + (timeSeries[i+1]-timeSeries[i]);
    	}
    }
    return totaltime;
};

// let testcase = findPoisonedDuration([1,4], 2);
let testcase = findPoisonedDuration([1,2], 2);
console.log(testcase);

export default findPoisonedDuration;