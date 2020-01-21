/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length == 0){
		return 0;
	}
	if(nums.length == 1){
		return nums[0];
	}
	if(nums.length == 2){
		return Math.max(nums[0],nums[1]);
	}
	let dp = new Array(nums.length).fill(0);
	dp[0] = nums[0]; 
	dp[1] = nums[1];
	dp[2] = nums[0]+nums[2];
    for (let i = 3; i < nums.length; i++) {
    	dp[i] = Math.max(dp[i-2]+nums[i],dp[i-3]+nums[i]);
    }
    return Math.max(dp[nums.length-1],dp[nums.length-2]);
};

let testcase = rob([2,1,1,2]);
// let testcase = rob([1,2,3,1]);
console.log(testcase);
export default rob;