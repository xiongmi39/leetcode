/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	if(nums.length == 0){
		return nums[0];
	}
    let imax = 1;
    let imin = 1;
    let max = -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<0){
            let tmp = imin;
            imin = imax;
            imax = tmp;
        }
        imax = Math.max(nums[i],imax*nums[i]);
        imin = Math.min(nums[i],imin*nums[i]);
        max = Math.max(imax,max);
    }
    return max;
};

let testcase = maxProduct([-2,0,-1]);
console.log(testcase);
export default maxProduct;