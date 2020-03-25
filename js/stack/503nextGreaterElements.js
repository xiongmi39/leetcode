/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	let stack = [];
	let ans = [];
	let count = 2;
	while(count>0){
		for (let i = nums.length-1; i >= 0; i--) {
			while(nums[stack[stack.length-1]] <= nums[i]){
				stack.pop();
			}
			if(stack.length>0){
				ans[i] = nums[stack[stack.length-1]];
			}else{
				ans[i] = -1;
			}
			stack.push(i);
		}
		count--;		
	}
	return ans;
};

let testcase = nextGreaterElements([-1,0]);
console.log(testcase);
export default nextGreaterElements;