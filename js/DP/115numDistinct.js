/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
	let lens = s.length;
	let lent = t.length;
   	let dp = Array.from(new Array(lent+1), ()=> new Array(lens+1).fill(0));
   	for (var a = 0; a < lens+1; a++) {
   		dp[0][a] = 1;
   	}
   	for (let i = 1; i < lent+1; i++) {
   		for (let j = 1; j < lens+1; j++) {   		
   			if(t.charAt(i-1) == s.charAt(j-1)){
   				dp[i][j] = dp[i-1][j-1]+dp[i][j-1];
   			}else{
   				dp[i][j] = dp[i][j-1];
   			}
   		}
   	}
   	return dp[lent][lens];
};

let testcase = numDistinct("rabbbit","rabbit");
console.log(testcase);
export default numDistinct;