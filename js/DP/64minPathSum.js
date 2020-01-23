/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	if(grid.length == 0){
		return 0;
	}
	let m = grid.length;
	let n = grid[0].length;
    let dp = new Array(m+1);
    for (let i = 0; i < dp.length; i++) {
    	dp[i] = new Array(n+1).fill(0);
    }
    for (let r = 1; r < dp.length; r++) {
    	for (let c = 1; c < dp[0].length; c++) {
    		if(r == 1){
    			dp[1][c] = dp[1][c-1] + grid[0][c-1];
    		}else if(c == 1){
    			dp[r][1] = dp[r-1][1] + grid[r-1][0];
    		}else{
    			dp[r][c] = Math.min(dp[r-1][c],dp[r][c-1])+grid[r-1][c-1];
    		}
    	}
    }
    return dp[m][n];
};

let testcase = minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
console.log(testcase);
export default minPathSum;