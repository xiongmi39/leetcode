/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	let m = word1.length;
	let n = word2.length;
	if(m == 0){
		return n;
	}
	if(n == 0){
		return m;
	}
    let dp = new Array(m+1);
    for (let i = 0; i < dp.length; i++) {
    	dp[i] = new Array(n+1);
    }
    for (let r = 0; r <= m; r++) {
    	for (let c = 0; c <= n; c++) {
    		if(r == 0){
    			dp[r][c] = c;
    		}else if(c == 0){
    			dp[r][c] = r;
    		}else{
    			if(word1.charAt(r-1) == word2.charAt(c-1)){
    				dp[r][c] = dp[r-1][c-1];
    			}else{
    				dp[r][c] = Math.min(dp[r-1][c-1],dp[r-1][c],dp[r][c-1])+1;
    			}
    		}

    	}
    }
    return dp[m][n];
};

let testcase = minDistance("horse","ros");
console.log(testcase);
export default minDistance;