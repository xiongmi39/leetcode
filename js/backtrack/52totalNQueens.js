/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let list = [];
    let valid = {};
    valid.column = {};
    valid.left = {};
    valid.right = {};
    backtrack(list,[],1,1,n,valid);
    return list.length;
};

function backtrack(list,tmparr,row,column,n,valid){
	if(row == n+1){
		return	list.push([...Array.from(tmparr)]);
	}
	for (var i = 1; i <= n; i++) {
		if(isValid(row,i,valid)){
			continue;
		}
		tmparr.push(i);
		setValid(row,i,valid,true);
		backtrack(list,tmparr,row+1,i,n,valid);
		setValid(row,i,valid,false);
		tmparr.pop();
	}
}
function isValid(row,column,valid){
	return valid.column[column] || valid.left[row+column] || valid.right[row-column];
}
function setValid(row,column,valid,flg){
	//列
	valid.column[column] = flg;
	//对角线
	valid.left[row+column] = flg;
	valid.right[row-column] = flg;
}
let testcase = totalNQueens(4);
console.log(testcase);

export default totalNQueens;