/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	if(nums.length === 0){
		return ;
	}
    let list = [];
    return backtrack(list,[],nums);
};


function backtrack(list,tmparr,nums){
	if(nums.length === 0){
		return list.push([...Array.from(tmparr)]);
	}
	for (let i=nums.length-1;i >= 0; i--) {
		tmparr.push(nums[i]);
		let num = nums.splice(i,1);;
		backtrack(list,tmparr,nums);
		nums.splice(i,0,...num);
		tmparr.pop();
		
	}
	return list;
}

let testcase = permute([3,2,1]);
console.log(testcase);

export default permute;