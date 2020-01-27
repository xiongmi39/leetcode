/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	if(s.charAt(0) == '0'){
		return 0;
	}
	let pre =1;
	let cur = 1;
	for (let i = 1; i < s.length; i++) {
		let tmp = cur;
		if(s.charAt(i) == '0'){
			if(s.charAt(i-1) == '1' || s.charAt(i-1) == '2'){
				cur = pre;
			}else{
				return 0;
			}
		}else if(s.charAt(i-1) == '1'  || (s.charAt(i-1) == '2' && s.charAt(i) >= '1' && s.charAt(i) <= '6')){
			cur = pre +cur;			
		}
		pre = tmp;
	}
	return cur;
};

let testcase = numDecodings("24726");
// let testcase = numDecodings('27');
// let testcase = numDecodings('10');

console.log(testcase);
export default numDecodings;