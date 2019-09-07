
// 78. 子集
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
//迭代 64ms
function getSubSets(nums){
	let sets = [[]];
	for (var i = 0; i < nums.length; i++) {
		// sets = sets.map((subset)=>{
		// 	return [...subset,nums[i]];
		// }).concat(sets);
		sets =[...(sets.map((subset)=>{
			return [...subset,nums[i]];
		})),...sets];
	}
	return sets;
}
//递归 72ms
function getSubSetsb(nums){
	if(nums.length == 0){
		return [[]];
	}
	let [num,...restnums] = nums;
	sets = getSubSetsb(restnums);
	return sets.map((subset)=>{
		return [...subset,num];
	}).concat(sets);
}
//尾递归 72ms
function getSubSetsc(nums,sets=[[]]){
	if(nums.length == 0){
		return sets;
	}
	let [num,...restnums] = nums;
	sets = sets.map((set)=>{
		return [...set,num];
	}).concat(sets);
	return getSubSetsc(restnums,sets);
}

let nums = [1,2,3];

let subsets = getSubSets(nums);
console.log(subsets);

export default getSubSets;