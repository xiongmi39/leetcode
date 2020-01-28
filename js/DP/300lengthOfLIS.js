/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	if(nums.length < 2){
		return nums.length;
	}
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
    	for (let j = 0; j < i; j++) {
    		if(nums[j] < nums[i]){
    			dp[i]  = Math.max(dp[i],dp[j]+1);
    		}
    	}
    }
    return Math.max(...dp);
};

let testcase = lengthOfLIS([-2,-1]);
// let testcase = lengthOfLIS([4,10,4,3,8,9]);

console.log(testcase);
export default lengthOfLIS;