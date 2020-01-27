/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length == 0){
		return 0;
	}
	if(nums.length < 4){
		return Math.max(...nums);
	}
	return Math.max(getMax(nums.slice(0,nums.length-1)),getMax(nums.slice(1,nums.length)));
    function getMax(nums){
    	let dp = new Array(nums.length+1);
    	dp[0] = 0;
    	dp[1] = nums[0];
    	for (let i = 2; i <= nums.length; i++) {
    		dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
    	}
    	return dp[nums.length];
    }
};

let testcase = rob([1,3,1,3,100]);
console.log(testcase);
export default rob;