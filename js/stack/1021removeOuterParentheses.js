/**
 * @param {string} S
 * @return {string}
 */
// var removeOuterParentheses = function(S) {
// 	if(S.length == 0){
// 		return S;
// 	}
// 	let l = 0;
// 	let r = 0;
// 	let countl = 0;
// 	let countr = 0;
// 	let ans = "";
// 	while(r<S.length){
// 		if(S.charAt(r) == '('){
// 			countl++;
// 		}
// 		if(S.charAt(r) == ')'){
// 			countr++;
// 		}
// 		r++;
// 		if(countl >0 && countr > 0 && countr === countl){
// 			ans+= S.slice(l+1,r-1);
// 			countl = 0;
// 			countr = 0;
// 			l = r;
// 		}
// 	}
// 	return ans;
// };

var removeOuterParentheses = function(S) {
	let ans = "";
	let count = 0;
	for (let s of S) {
		if(s == '('){
			count++;
			if(count>1){
				ans += s;
			}
		}else{
			if(count>1){
				ans += s;
			}
			count--;
		}
	}
	return ans;
};

let testcase = removeOuterParentheses("(()())(())");
console.log(testcase);
export default removeOuterParentheses;