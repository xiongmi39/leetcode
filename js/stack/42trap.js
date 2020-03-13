/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let stack = [];
	let total = 0;
	let i = 0;
	while (i < height.length) {
		while(stack.length !== 0 && height[i] > height[stack[stack.length-1]]){
			let h = height[stack.pop()];
			if(stack.length == 0){
				break;
			}
			let left = stack[stack.length-1];
			total += (i-left-1)*(Math.min(height[left],height[i])-h);

		}
		stack.push(i);
		i++;
	}
	return total;
};

let testcase = trap([2,1,0,2]);
console.log(testcase);
export default trap;