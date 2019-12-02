/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let list = [];
    candidates.sort((a,b)=>{
    	return a-b;
    });
    let valid = {};
    backtrack(list,[],candidates,target,0,valid);

    return list;
};

function backtrack(list,tmparr,candidates,target,n,valid){
	if(target == 0){
		let key = "";
		for (let i = 0; i < tmparr.length; i++) {
			key+= tmparr[i];
		}
		if(valid[key]){
			return;
		}
		valid[key] = true;
		return list.push([...Array.from(tmparr)]);
	}
	if(n == candidates.length){
		return;
	}
	for (let i = n; i < candidates.length; i++) {
		if(candidates[i] > target){
			continue;
		}
		if(candidates[i] == candidates[i-1] && tmparr.length == 0){
			continue;
		}
		tmparr.push(candidates[i]);
		backtrack(list,tmparr,candidates,target-candidates[i],i+1,valid);
		tmparr.pop();
	}
}

// let testcase = combinationSum2([10,1,2,7,6,1,5],8);
let testcase = combinationSum2([2,5,2,1,2],5);
console.log(testcase);

export default combinationSum2;