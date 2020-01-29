/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length;
    if(m == 0){
    	return 0;
    }
    let n = matrix[0].length;
    let dp = new Array(m+1);
    let max = 0;
    for (let i = 0; i < dp.length; i++) {
    	dp[i] = new Array(n+1).fill(0);
    }
    for (let c = 1; c <= m; c++) {
    	for (let r = 1; r <= n; r++) {
    		if(matrix[c-1][r-1] == 1){
    			dp[c][r] = Math.min(dp[c-1][r],dp[c][r-1],dp[c-1][r-1])+1;
    			max = Math.max(max,dp[c][r]);
    		}
    	}
    }
    return max*max;
};


// let testcase = maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
let testcase = maximalSquare([["1","0","1","0","0"]]);
console.log(testcase);
export default maximalSquare;