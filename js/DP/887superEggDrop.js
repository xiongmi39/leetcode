/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
// var superEggDrop = function(K, N) {
// 	if(N == 1){
// 		return 1;
// 	}
// 	if(N == 2){
// 		return 2;
// 	}
//     let ans = 1;
//     return getF(N,ans);
//     function getF(N,ans){
//     	if(N == 2){
//     		return ans;
//     	}
//     	return getF(Math.ceil(N/2),ans+1);
//     }
// };

// var superEggDrop = function(K, N) {
// 	let dp = new Array(K+1);
// 	for (let i = 0; i < dp.length; i++) {
// 		dp[i] = new Array(N+1).fill(0);
// 	}
// 	let m = 0;	
// 	//共k个鸡蛋，最多扔m次，能确定dp[k][m]层楼
// 	//K个鸡蛋，限制扔m次，确定N层楼
// 	while(dp[K][m] < N){
// 		m++;
// 		for (let k = 1; k <= K; k++) { 
// 		//dp[k-1][m-1] 鸡蛋碎了，次数减一，楼下的这些层
// 		//dp[k][m-1] 鸡蛋没碎，F在楼上的层
// 		//1 本层，当前扔鸡蛋的这层			
// 			dp[k][m] = dp[k-1][m-1] + dp[k][m-1] +1;
// 		}
// 	}
// 	return m;
// };

var superEggDrop = function(K, N) {
	let memo = new Map();
	return dp(K,N);
    function dp(k,n){
    	if(k == 1){
    		return n;
    	}
    	if(n== 0){
    		return 0;
    	}
    	if(memo.has([k,n]) ){
    		return memo.get([k,n]);
    	}
    	let res = Number.MAX_VALUE;
    	for (let i = 1; i <= n; i++) {
    		res = Math.min(res,Math.max(dp(k-1,i-1),dp(k,n-i))+1);
    		let a = [k,n];
    		memo.set(a,res);
    	}
    	return res;
    }
};

let testcase = superEggDrop(3,6);
console.log(testcase);
export default superEggDrop;