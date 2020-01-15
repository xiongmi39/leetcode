/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
// 	let sum = nums.reduce((pre,cur)=> pre+cur);
// 	let len = nums.length;
// 	if(len == 0){
// 		return false;
// 	}
// 	if(sum%2 == 1){
// 		return false;
// 	}
// 	let target = sum/2;
// 	//这种创建二维数组的方法不可以，会导致几个数组的引用相同
// 	//let dp = new Array(len).fill(new Array(target+1).fill(false));
// 	let dp = new Array(len);
// 	for (let i = 0; i < dp.length; i++) {
// 		dp[i] = new Array(target+1).fill(false);
// 	}
// 	if(nums[0]<= target){
// 		dp[0][nums[0]] = true;
// 	}
// 	for (let i = 1; i < len; i++) {
// 		for (let j = 0; j <= target; j++) {
// 			dp[i][j] = dp[i-1][j];
// 			if(nums[i] == j){
// 				dp[i][j] = true;
// 				continue;
// 			}
// 			if(nums[i] < j){
// 				dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]];
// 			}
// 		}
// 	}
// 	return dp[len-1][target];
// };

var canPartition = function(nums) {
	let sum = nums.reduce((pre,cur)=> pre+cur);
	let len = nums.length;
	if(len == 0){
		return false;
	}
	if(sum%2 == 1){
		return false;
	}
	let target = sum/2;
	let dp = new Array(target+1).fill(false);
	dp[0] = true;
	for (let i = 0; i < nums.length; i++) {
		for (let j = target; j >= nums[i]; j--) {
			if(dp[j-nums[i]] == true){
				dp[j] = true;
			}
		}
	}
	return dp[target];
};
let testcase = canPartition([1,5,11,5]);
console.log(testcase);
export default canPartition;