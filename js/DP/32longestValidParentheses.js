/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let left = 0;
	let right = 0;
	let len = [0];
	let sarr = s.split('');
	for(let str of sarr){
		if(str == '('){
			left++;
		}
		if(str == ')'){
			right++;
		}
		if(left == right){
			len.push(left+right);
		}
		if(right > left){
			left = 0;
			right = 0;
		}
	}
	left = 0;
	right = 0;
	for(let i = sarr.length ;i>0;i--){
		if(sarr[i] == '('){
			left++;
		}
		if(sarr[i] == ')'){
			right++;
		}
		if(left == right){
			len.push(left+right);
		}
		if(left > right){
			left = 0;
			right = 0;
		}
	}
	return Math.max(...len);
};

let testcase = longestValidParentheses("(()");
console.log(testcase);
export default longestValidParentheses;