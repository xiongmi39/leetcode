/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let list = [];
    nums.sort((a,b)=>{
    	return a-b;
    });
    backtrack(list,[],nums,0);
    return list;
};

function backtrack(list,tmparr,nums,n){		
	list.push([...Array.from(tmparr)]);
	for (var i = n; i < nums.length; i++) {
		if( i> n && nums[i] == nums[i-1] ){
			continue;
		}
		tmparr.push(nums[i]);
		backtrack(list,tmparr,nums,i+1);
		tmparr.pop();
	}
}

function getSubSets(arr){
	arr.sort((a,b)=>{
		return a-b;
	});
	let sets = [[]];
	for (var i = 0; i < arr.length; i++) {
	sets = [...sets.map((sub)=>{
			return [...sub,arr[i]];
		}),...sets]	;
	}

	return sets;
}

let testcase = getSubSets([1,2,2]);
console.log(testcase);

export default subsetsWithDup;