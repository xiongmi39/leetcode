/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var canPartitionKSubsets = function(nums, k) {
// 	let sum = nums.reduce((p,c)=>p+c);
// 	if(sum == 0 || k == 0 || sum%k !== 0){
// 		return false;
// 	}
// 	let tar = sum/k;
// 	let dp = new Array(tar+1).fill(false);
// 	dp[0] = true;
// 	let sumtar = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = tar; j >= nums[i]; j--) {
// 			if(dp[j-nums[i]]){
// 				dp[j] = true;
// 			}
// 		}
// 	}
// 	return dp[tar];
// };

var canPartitionKSubsets = function(nums, k) {
	let sum = nums.reduce((p,c)=>p+c);
	if(sum == 0 || k == 0 || sum%k !== 0){
		return false;
	}
	let tar = sum/k;
	nums.sort((a,b)=>b-a);
	let list = [];
	let used = {};
	return backtrack(nums,used,0,0,k);
	function backtrack(nums,used,i,sumtar,k){
		if(k == 0){
			return true;
		}
		if(sumtar == tar){
			return backtrack(nums,used,0,0,k-1);
		}
		for (let j = i; j < nums.length; j++) {
			if(!used[j]&& sumtar+nums[j] <= tar){
				used[j] = true;
				let flg = backtrack(nums,used,j+1,sumtar+nums[j],k);
				if(flg){
					return true;
				};
				used[j] = false;				
			}
		}
		return false;
	}
};
let testcase = canPartitionKSubsets([10,10,10,7,7,7,7,7,7,6,6,6],3);
console.log(testcase);
export default canPartitionKSubsets;