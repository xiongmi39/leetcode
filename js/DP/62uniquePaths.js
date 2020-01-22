/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(n+1);
    for (let i = 0; i < dp.length; i++) {
    	dp[i] = new Array(m+1).fill(0);
    }
    for (let c = 1; c < dp[0].length; c++) {
    	for (let r = 1; r < dp.length; r++) {
    		dp[r][1] = 1;
    		dp[1][c] = 1;
    		if(r !==1 && c !== 1){
    			dp[r][c] = dp[r-1][c] + dp[r][c-1];
    		}   		
    	}
    }
    return dp[n][m];   
};

let testcase = uniquePaths(1,1);
console.log(testcase);
export default uniquePaths;