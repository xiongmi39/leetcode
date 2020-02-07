/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
	let hash = {};
	let flg = false;
	let max = 0;
    for (let i = 0; i < s.length; i++) {
    	!hash[s.charAt(i)] ?  hash[s.charAt(i)]= 1 : hash[s.charAt(i)]++;
    }
    for (let a in hash) {
    	if(hash[a] %2 == 0){
    		max += hash[a];
    	}else{
    		max += hash[a]-1;
    		flg = true;
    	}
    }
    if(flg){
    	return max+1;
    }else{
    	return max;
    }
};

let testcase = longestPalindrome("abccccdd");
console.log(testcase);
export default longestPalindrome;