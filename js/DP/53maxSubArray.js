/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if(nums.length == 0){
		return nums[0];
	}
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
    	if(sum+ nums[i] > nums[i]){
    		sum += nums[i];
    	}else{
    		sum = nums[i];
    	}
        // sum = Math.max(sum+ nums[i],nums[i]);
    	max = Math.max(max,sum);
    }
    return max;
};


let testcase = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(testcase);
export default maxSubArray;