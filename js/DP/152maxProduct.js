/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	if(nums.length == 0){
		return nums[0];
	}
    let cur = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
    	if(cur* nums[i] > nums[i]){
    		cur *= nums[i];
    	}else{
    		cur = nums[i];
    	}
    	max = Math.max(cur,max);
    }
    return max;
};

let testcase = maxProduct([-2,3,-4]);
console.log(testcase);
export default maxProduct;