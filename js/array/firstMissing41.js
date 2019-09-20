/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	for (var i = 0; i < nums.length; i++) {
		while(nums[i] !==i+1){
			if(nums[i]<=0 || nums[i]>nums.length || nums[i]== nums[nums[i]-1]){
				break;
			}
			let idx = nums[i]-1;
			nums[i] =nums[idx];
			nums[idx] = idx+1; 
		}
	}
	for (var i = 0; i < nums.length; i++) {
		if(nums[i] !== i+1){
			return i+1;
		}
	}
	return nums.length+1;
};

let testcase = firstMissingPositive([7,8,9,11,12]);
console.log(testcase);
export default firstMissingPositive;