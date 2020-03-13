/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
	let stack = [];
	let ans = [];
	let i = 0;
	while(i < T.length){
		while(stack.length > 0 && T[i] > T[stack[stack.length-1]]){
			let cur = stack.pop();
			ans[cur] = i-cur;
		}
		stack.push(i);
		i++;
	}
	stack.map((a)=>{
		ans[a] = 0;
	});
	return ans;
};

let testcase = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(testcase);
export default dailyTemperatures;