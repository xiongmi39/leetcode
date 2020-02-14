/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let H = haystack.length;
    let N = needle.length;
    if(N == 0){
    	return 0;
    }
    let ans = -1;
    for (let h = 0; h <= H-N; h++) {
    	for (var n = 0; n < N; n++) {
    		if(needle[n] !== haystack[h+n]){
    			break;
    		}

    	}
    	if(n == N){
    		return h;
    	}
    }
    return ans;
};

let testcase = strStr("a","a");
console.log(testcase);
export default strStr;