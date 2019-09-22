/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
 nums.sort((a,b)=>{
 	return a-b;
 });
 for (var i = 0; i < nums.length; i++) {
 	if(nums[i]!==i){
 		return i;
 	}
 }
    return nums.length;
};

function missingNumber2(nums){
	let res = 0;
	for (var i = 0; i <= nums.length; i++) {
		res ^= nums[i]^i;
	}
	return res;
}

function missingNumber3(nums){
	let idxsum = 0;
	let sum = 0;
	for (var i = 0; i < nums.length; i++) {
		idxsum += i;
		sum += nums[i];
	}
	idxsum += nums.length;
	return idxsum-sum;
}

let testcase = missingNumber3([0,1,3]);
console.log(testcase);

export default missingNumber;