/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
	let n = s.length;
    let dp = new Array(n+1);
    for (let m = 0; m < dp.length; m++) {
    	dp[m] = new Array(n+1).fill(0);
    	dp[m][m] = 1;
    }
    for (let j = 0; j <= n; j++) {
    	for (let i = j-1; i >= 0; i--) {
    		if(s.charAt(i) == s.charAt(j)){
    			dp[i][j] = dp[i+1][j-1] +2;
    		}else{
    			dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
    		}
    	}
    }
    return dp[0][n-1];
};

let testcase = longestPalindromeSubseq("bbbab");
console.log(testcase);
export default longestPalindromeSubseq;