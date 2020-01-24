/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
	if(triangle.length == 0){
		return 0;
	}
	if(triangle.length == 1){
		return triangle[0][0];
	}
    let dp = new Array(triangle[triangle.length-1].length);
    dp[0] = triangle[0][0];
    for (let nums of triangle) {
    	for (let i = nums.length -1; i >= 0; i--) {
    		if(nums.length == 1){
    			continue;
    		}
    		if(i == nums.length -1){
    			dp[i] = dp[i-1]+nums[i];
    		}else
    		 if(i == 0){
    			dp[i] = dp[i]+nums[i];
    		} else{
    			dp[i] = nums[i] + Math.min(dp[i],dp[i-1]);
    		}
    	}
    }
    return Math.min(...dp);
};

let testcase = minimumTotal([[-1],[2,3],[1,-1,-3]]);
console.log(testcase);
export default minimumTotal;