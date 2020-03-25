/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	const SIGN = {
		'*' : (a, b) => a * b,
		'/' : (a, b) => Math.trunc(a / b),
		'+' : (a, b) => a + b,
		'-' : (a, b) => a - b
	}
	let stack = [];
	let flg = '+-*/';
	for (let tok of tokens) {
		if(tok in SIGN){
			let right = parseInt(stack.pop());
			let left = parseInt(stack.pop());
			let res = SIGN[tok](left,right);
			stack.push(res);			
		}else{
			stack.push(tok);
		}		
	}
	return stack.pop();
};

let testcase = evalRPN(["2","1","+","3","*"]);
console.log(testcase);
export default evalRPN;