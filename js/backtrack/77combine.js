/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let list = [];
    backtrack(list,[],n,k,1);
    return list;
};

function backtrack(list,tmparr,n,k,cur){
	if(k == 0){
		return list.push([...Array.from(tmparr)]);
	}
	for (var i = cur; i < n+1; i++) {
		tmparr.push(i);
		backtrack(list,tmparr,n,k-1,i+1);
		tmparr.pop();
	}
	
}

let testcase = combine(4,2);
console.log(testcase);

export default combine;