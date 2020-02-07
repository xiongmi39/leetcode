/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	let len = s.length;
    let dp = new Array(len+1);
    let ans = 0;
    for (let m = 0; m < dp.length; m++) {
    	dp[m] = new Array(len+1).fill(0);
    }
    for (let j = 0; j < len; j++) {
    	for (let i = j; i >= 0; i--) {
    		if(s.charAt(i) == s.charAt(j) && (j-i<2 || dp[i+1][j-1])){
    			dp[i][j] = true;
    			ans++;
    		}
    	}
    }
    return ans;
};

let testcase = countSubstrings("aaa");
console.log(testcase);
export default countSubstrings;