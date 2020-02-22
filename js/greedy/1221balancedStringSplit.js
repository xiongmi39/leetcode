/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
	if(s.length == 0){
		return 0;
	}
    let count = 0;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
    	s.charAt(i) == 'L' ? count++ : count--;
    	if(count == 0){
    		ans++;
    	}
    }
    return ans;
};

let testcase = balancedStringSplit("RLRRLLRLRL");
console.log(testcase);
export default balancedStringSplit;