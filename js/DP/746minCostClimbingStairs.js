/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
	if(cost.length == 0){
		return 0;
	}
	if(cost.length == 1){
		return cost[0];
	}
	if(cost.length == 2){
		return Math.min(cost[0],cost[1]);
	}
	cost.push(0);
    let dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < dp.length; i++) {
    	dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i];
    }
    return dp[cost.length-1];
};

let testcase = minCostClimbingStairs([10, 15]);
console.log(testcase);
export default minCostClimbingStairs;