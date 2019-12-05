/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let list = [];
    backtrack(list,[],k,n,n,1);
    return list;
};

function backtrack(list,tmparr,k,n,sum,cur){
	if(k==0 && sum==0){
		return list.push([...Array.from(tmparr)]);
	}
	if(sum<0){
		return;
	}
	if(k==0 && sum>0){
		return;
	}
	for (var i = cur; i < 10; i++) {
		tmparr.push(i);
		backtrack(list,tmparr,k-1,n,sum-i,i+1);
		tmparr.pop();
	}
}

let testcase = combinationSum3(3,15);
console.log(testcase);

export default combinationSum3;