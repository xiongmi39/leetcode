/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
// 	if(nums.length == 0){
// 		return -1;
// 	}
//     let set = new Set();
//     for (let num of nums) {
//     	if(set.has(num)){
//     		return num;
//     	}else{
//     		set.add(num);
//     	}
//     }
//     return -1;
// };

var findRepeatNumber = function(nums) {
	for (let i = 0;i<nums.length;i++) {
		while(i !==nums[i]){
			if(nums[i] == nums[nums[i]]){
				return nums[i];
			}else{
				nums[i] = nums[i]^nums[nums[i]];
				nums[nums[i]] = nums[nums[i]]^nums[i];
				nums[i] = nums[nums[i]]^nums[i];
			}
		}
	}
	return -1;
};

let testcase = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
console.log(testcase);
export default findRepeatNumber;