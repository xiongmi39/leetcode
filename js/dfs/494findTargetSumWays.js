/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
 //dfs
// var findTargetSumWays = function(nums, S) {
// 	let p = new Map();
// 	return dfs(0,0,p);
//     function dfs(cur,i,p){
//     	if(i == nums.length){
//     		if(p.has([cur,i])){
//     			return p.get('cur'+'.'+'i');
//     		}
//     		if(cur == S){
//     			return 1;
//     		}else{
//     			return 0;
//     		}
//     	}
//     	if(i<nums.length && !p.get([cur,i])){
//     		p.set('cur'+'.'+'i',dfs(cur+nums[i],i+1,p)+dfs(cur-nums[i],i+1,p));
//     	}   	
//     	return p.get('cur'+'.'+'i');
//     }
// }; 
//dfs
// var findTargetSumWays = function(nums, S) {
// 	return dfs(nums,S,0);
//     function dfs(nums,S,i){
//     	if(i == nums.length){
//     		return S=== 0 ? 1:0;
//     	}
//     	return dfs(nums,S-nums[i],i+1)+dfs(nums,S+nums[i],i+1);
//     }
// };

var findTargetSumWays = function(nums, S) {
	let sumnums = nums.reduce((pre,cur)=> pre+cur);
	let p = (sumnums+S)/2;
	if(sumnums<S || (sumnums+S)%2 == 1 ){
		return 0;
	}
	let dp = new Array(p+1).fill(0);
	dp[0] =1;
	for (let i = 0; i < nums.length; i++) {
		for (let j = p; j >= nums[i]; j--) {
			dp[j] = dp[j-nums[i]] + dp[j];
		}
	}
	return dp[p];
};
let testcase = findTargetSumWays([1],1);
console.log(testcase);
export default findTargetSumWays;