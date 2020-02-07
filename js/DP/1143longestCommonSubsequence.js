/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 //DP
// var longestCommonSubsequence = function(text1, text2) {
//     let len1 = text1.length;
//     let len2 = text2.length;
//     // let dp = new Array(len1+1);
//     // for (let m = 0; m < dp.length; m++) {
//     // 	dp[m] = new Array(len2+1).fill(0);
//     // }
//     let dp = Array.from(new Array(len1+1),() => new Array(len2+1).fill(0));
//     for (let j = 1; j < len2+1; j++) {
//     	for (let i = 1; i < len1+1; i++) {
//     		if(text1.charAt(i-1) == text2.charAt(j-1)){
//     			dp[i][j] = dp[i-1][j-1]+1;
//     		}else{
//     			dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
//     		}
//     	}
//     }
//     return dp[len1][len2];
// };
//递归
var longestCommonSubsequence = function(text1, text2) {
	let memo = {};
	return dp(text1.length-1,text2.length-1);
    function dp(s,t){
    	if(s == -1){
    		return 0;
    	}
    	if(t == -1){
    		return 0;
    	}
    	if(memo[s+'.'+t]){
    		return memo[s+'.'+t];
    	}
    	if(text1.charAt(s) == text2.charAt(t)){
    		memo[s+'.'+t] = dp(s-1,t-1)+1;
    	}else{
    		memo[s+'.'+t] = Math.max(dp(s,t-1),dp(s-1,t));
    	}
    	return memo[s+'.'+t];
    }
};

let testcase = longestCommonSubsequence("abcde","ace");
console.log(testcase);
export default longestCommonSubsequence;