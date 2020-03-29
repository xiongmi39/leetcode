/**
 * @param {string} s
 * @return {number}
 */
// var calculate = function(s) {
// 	if(s.indexOf('+') <0 && s.indexOf('-') <0){
// 		return parseInt(s.match(/\d/g).join(''));
// 	}
// 	let stack = [];
// 	let SIGN = {'+': (a,b) => a+b,
// 	'-': (a,b) => a-b
// 	};
// 	s = s.split(' ').join('');
// 	for (let str of s){
// 		if(str == ')'){
// 			let tmp = [];
// 			while(stack[stack.length-1] !== '('){
// 				tmp.push(stack.pop());
// 			}
// 			stack.pop();
// 			stack.push(getSingle(tmp));
// 		}else{
// 			stack.push(str)
// 		}
// 	}
// 	return getSingle(stack.reverse());
// 	function getSingle(tmp){
// 		while(tmp.length >1){
// 			let a = parseInt(tmp.pop());
// 			let sg = tmp.pop();
// 			while(!SIGN[sg]){				
// 				a = a*10+parseInt(sg);
// 				sg = tmp.pop();
// 			}
// 			let b = 0;
// 			while(tmp.length>0 && !SIGN[tmp[tmp.length-1]]){
// 				b = b*10 + parseInt(tmp.pop());
// 			}
// 			tmp.push(SIGN[sg](a,b));
// 		}
// 		return tmp[0];
// 	}
// };

var calculate = function(s) {
	let sign = 1;
	let res = 0;
	let stack = [];
	let i = 0;
	s = s.split(' ').join('');
	while(i<s.length){
		if(s.charAt(i) === '-'){
			sign = -1;
			i++;
		}else if(s.charAt(i) === '+'){
			sign = 1;
			i++;
		}else if(s.charAt(i) === '('){
			stack.push(res);
			stack.push(sign);
			res = 0;
			sign = 1;
			i++;
		}else if(s.charAt(i) === ')'){
			res = res*stack.pop()+stack.pop();
			i++;
		}else if(s.charAt(i) >= 0 && s.charAt(i) <=9){
			let tmp = parseInt(s.charAt(i));
			i++;
			while(i<s.length && s.charAt(i) >= 0 && s.charAt(i) <=9){
				tmp = tmp*10+parseInt(s.charAt(i));
				i++;
			}
			res = res+tmp*sign;
		}
	}
	return res;
};

let testcase = calculate("(9568+(9040-(380+(2042-(7115)+(6294)-(4395-(5183+9744+(7746-(1099+2718))-(9370-(8561+(9302)-(7632+(8451-(1759+(7760))-(3377+5363+9093+(8332-(4492-(1151+(1165-8833+(775+(3749)+9399))+9112+(6273+(7285-(6112-(668-(7756-4316-(582+1835-(6644+690+1204-(7197+(7897))+(7009-(7262))-7782-(7858+(7644+(9461+(2224)-(7531-1095-(891+1022)+2197-(9855)))+(6663-(7417-(6158-(3610))+(1481))-(4182+(4761)))+(5017))+(9990)+(6218)))-(2904)+(5631)-(8888)+3401+(3569))+(1135))-(3695-(7713+(3479)-(9813+(8171+(8616-8026+(4634-(6973))-(9761-(623-4782)+(2514)+(6233)))))+(6140))-(6641)-8611+(8389)+8074-(4412))-(3703)+(9688+(9513))))-(4987)))+(9647)))))))))-(2299))-(4785))))))");
console.log(testcase);
export default calculate;