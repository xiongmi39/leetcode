/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let list = [];
    nums.sort((a,b)=>{
    	return a-b;
    });
    backtrack(list,[],nums,0);
    return list;
};

function backtrack(list,tmparr,nums){
	if(nums.length == 0){
		list.push([...Array.from(tmparr)]);
	}
	for (var i = 0; i < nums.length; i++) {
		if(nums[i] == nums[i-1]){
			continue;
		}
		let num = nums.splice(i,1);
		tmparr.push(...num);
		backtrack(list,tmparr,nums);
		tmparr.pop();
		nums.splice(i,0,...num);
	}

}

let testcase = permuteUnique([1,1,2,2]);
console.log(testcase);

export default permuteUnique;