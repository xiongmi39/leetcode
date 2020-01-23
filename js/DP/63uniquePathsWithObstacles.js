/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	if(obstacleGrid.length == 0){
		return 0;
	}
	if(obstacleGrid[0][0] == 1){
		return 0;
	}
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m);
    for (let i = 0; i < dp.length; i++) {
    	dp[i] = new Array(n).fill(0);
    }
    for (let r = 0; r < dp.length; r++) {
    	for (let c = 0; c < dp[0].length; c++) {
    		if(r == 0 && c == 0){
    			dp[r][c] = 1;
    		}
    		else if(r == 0){
    			if(obstacleGrid[0][c] !== 1 ){
    				dp[0][c] = dp[0][c-1];
    			}else{
    				dp[0][c] = 0;
    			}
    		}else if(c == 0){
    			if(obstacleGrid[r][0] !== 1){
    				dp[r][0] = dp[r-1][c];
    			} else{
    				dp[r][0] = 0;
    			} 			
    		}else{
    			if(obstacleGrid[r][c] == 1){
    				dp[r][c] = 0;
    			}else{
    				dp[r][c] = dp[r-1][c]+ dp[r][c-1];
    			}    			
    		}
    		// if((r > 0 && dp[r-1][c] == 0) || (c > 0  && dp[r][c-1] == 0)){
    		// 	return 0;
    		// }
    	}
    }
    return dp[m-1][n-1];
};

let testcase = uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
// let testcase = uniquePathsWithObstacles([[0,1,0],[1,0,0],[1,0,0]]);
console.log(testcase);
export default uniquePathsWithObstacles;