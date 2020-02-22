/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
    	if(i> k){
    		return false;
    	}
    	k = Math.max(k,i+nums[i]);
    }
    return true;
};

//超时
// var canJump = function(nums) {
// 	let i = 0;
// 	let len = nums.length;
// 	if(len == 1){
// 		return true;
// 	}
// 	while(i<len && nums[i]>0){
// 		let max = 0;
// 		let maxi = 0;
// 		for (let j = 0; j <= nums[i]; j++) {
// 			if(nums[i+j]+j >= max && i+j < len){
// 				max = nums[i+j]+j;
// 				maxi = j;
// 			}
// 			if(i+maxi >= len-1){
// 				return true;
// 			}
// 		}
// 		i+= maxi;
// 	}
// 	return false;
// };
let testcase = canJump([2,0]);
console.log(testcase);
export default canJump;