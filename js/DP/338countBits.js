/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let dp = new Array(num+1);
    dp[0] = 0;
    for (let i = 1; i <= num; i++) {
    	if(i%2 == 0){
    		dp[i] = dp[i/2];
    	}else{
    		dp[i] = dp[i-1]+1;
    	}
    }
    return dp;
};

let testcase = countBits(5);
console.log(testcase);
export default countBits;