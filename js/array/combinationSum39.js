/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	candidates.sort((a,b)=>a-b);
    let list = [];
    doSum(list,[],candidates,target,0);
    // doSum2(list,[],candidates,target,0,0);
    return list;
};

function doSum(list,tmplist,nums,tar,idx){
	if(tar < 0){
		return ;
	}
	if(tar === 0){
		return list.push([...tmplist]);
	}
	for (var i = idx; i < nums.length; i++) {
		tmplist.push(nums[i]);
		doSum(list,tmplist,nums,tar-nums[i],i);
		tmplist.pop();
	}
	return list;
}

function doSum2(list,tmplist,nums,tar,idx,tmpsum){
	if(tmpsum>tar){
		return;
	}
	if(tmpsum === tar){
		return list.push([...tmplist]);
	}
	for (var i = idx; i < nums.length; i++) {
		tmplist.push(nums[i]);
		doSum2(list,tmplist,nums,tar,i,tmpsum+nums[i]);
		tmplist.pop();
	}

}

let testcase = combinationSum([2,3,6,7],7);
console.log(testcase);

export default combinationSum;